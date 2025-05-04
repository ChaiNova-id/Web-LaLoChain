// app/api/purchase/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export interface PurchaseRequest {
  property_id: string;
  wallet_id: string;
}

export async function POST(req: NextRequest) {
  try {
    const { property_id, wallet_id }: PurchaseRequest = await req.json();

    // 1. Check if property exists
    const property = await prisma.property.findUnique({
      where: { property_id },
    });
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    // 2. Check if investor exists, if not create a new one
    let investor = await prisma.investor.findUnique({
      where: { wallet_id },
    });
    if (!investor) {
      investor = await prisma.investor.create({
        data: { wallet_id },
      });
    }

    // 3. Create a new property link
    const link = await prisma.propertyLink.create({
      data: {
        property_id,
        investor: { connect: { id: investor.id } },
      },
    });

    return NextResponse.json(
      { message: "Purchase successful", link },
      { status: 201 }
    );
  } catch (error) {
    console.error("Purchase error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
