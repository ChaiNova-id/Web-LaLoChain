import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ wallet_id: string }> }
) {
  const { wallet_id } = await params;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const skip = (page - 1) * pageSize;

  const owner = await prisma.owner.findUnique({
    where: { wallet_id },
    include: {
      list_address: true,
    },
  });

  if (!owner) {
    return NextResponse.json({ error: "Owner not found" }, { status: 404 });
  }

  const propertyIds = owner.list_address.map((link) => link.property_id);

  const [properties, total] = await Promise.all([
    prisma.property.findMany({
      where: {
        property_id: {
          in: propertyIds,
        },
      },
      orderBy: { property_id: "asc" },
      skip,
      take: pageSize,
    }),
    prisma.property.count({
      where: {
        property_id: {
          in: propertyIds,
        },
      },
    }),
  ]);

  return NextResponse.json({
    owner: wallet_id,
    data: properties,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  });
}
