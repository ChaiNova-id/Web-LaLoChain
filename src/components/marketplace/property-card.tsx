import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface PropertyCardProps {
  location: string;
  yieldRate: string;
  image: string;
  propertyName: string;
}

const PropertyCard = ({
  location,
  image,
  yieldRate,
  propertyName,
}: PropertyCardProps) => {
  return (
    <Card className="w-[15.625vw]">
      <CardHeader>
        <p className="text-[1.2vw] text-neutral-700">{location}</p>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[7.813vw]">
          <Image
            fill
            className="w-full object-cover"
            src={image}
            draggable={false}
            alt="Property Image"
          />
        </div>
        <h3 className="mt-[0.35vw] text-[1.24vw] font-medium text-neutral-800">
          {propertyName}
        </h3>
        <p className="text-[1.1vw] text-neutral-500">
          Rental Yield <br />
          <span className="text-[1.3vw] text-neutral-800">{yieldRate}</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="blue" className="w-full  text-[1.1vw] cursor-pointer">
          Buy Token
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
