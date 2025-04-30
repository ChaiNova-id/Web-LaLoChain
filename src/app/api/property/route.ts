import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface CreatePropertyRequest {
  property_id: string;
  name: string;
  description: string;
  location: string;
  revenue_report: string;
  wallet_id: string;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    property_id,
    name,
    description,
    location,
    revenue_report,
    wallet_id,
  }: CreatePropertyRequest = body;

  const newProperty = await prisma.property.create({
    data: {
      property_id,
      name,
      description,
      location,
      revenue_report,
    },
  });

  let owner = await prisma.owner.findUnique({
    where: { wallet_id },
  });

  if (!owner) {
    owner = await prisma.owner.create({
      data: {
        wallet_id,
      },
    });
  }

  await prisma.propertyLink.create({
    data: {
      property_id: newProperty.property_id,
      owner: {
        connect: {
          id: owner.id,
        },
      },
    },
  });

  return NextResponse.json(newProperty);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const skip = (page - 1) * pageSize;

  const [properties, total] = await Promise.all([
    prisma.property.findMany({
      skip,
      take: pageSize,
      orderBy: { property_id: "asc" }, // optional sorting
    }),
    prisma.property.count(),
  ]);

  return NextResponse.json({
    data: properties,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  });
}
