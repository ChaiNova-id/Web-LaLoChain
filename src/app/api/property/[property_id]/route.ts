// app/api/property/[property_id]/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ property_id: string }>;
}

export async function GET(
  req: NextRequest,
  context: Props
) {

  const { property_id } = await context.params;

  const property = await prisma.property.findUnique({
    where: { property_id },
  });

  if (!property) {
    return NextResponse.json(
      { error: `Property "${property_id}" not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(property);
}
