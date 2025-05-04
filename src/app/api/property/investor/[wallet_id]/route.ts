// app/api/investor/[wallet_id]/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: { wallet_id: string } }
) {
  const { wallet_id } = await context.params!;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") ?? "10", 10);
  const skip = (page - 1) * pageSize;

  // 1. Search investor by wallet_id
  const investor = await prisma.investor.findUnique({
    where: { wallet_id },
    include: { list_address: true },
  });
  if (!investor) {
    return NextResponse.json({
      investor: wallet_id,
      data: [],
      pagination: {
        page,
        pageSize,
        total: 0,
        totalPages: 0,
      },
    });
  }

  // 2. Collect property_ids from investor's list_address
  const propertyIds = investor.list_address.map((link) => link.property_id);

  // 3. Fetch properties based on property_ids
  const [properties, total] = await Promise.all([
    prisma.property.findMany({
      where: { property_id: { in: propertyIds } },
      orderBy: { property_id: "asc" },
      skip,
      take: pageSize,
    }),
    prisma.property.count({
      where: { property_id: { in: propertyIds } },
    }),
  ]);

  return NextResponse.json({
    investor: wallet_id,
    data: properties,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  });
}
