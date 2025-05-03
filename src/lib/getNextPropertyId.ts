import { prisma } from "@/lib/prisma";

export async function getNextPropertyId(): Promise<number> {
  const updated = await prisma.propertyCounter.update({
    where: { id: "property_counter" },
    data: { count: { increment: 1 } },
  });

  return updated.count;
}
