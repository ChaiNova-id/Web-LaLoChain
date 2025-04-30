"use client";
import HotelCard from "@/components/marketplace/hotel-card";
export default function Testing() {
    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <HotelCard location="location" image="/images/testing.png" propertyName="Green Field" tokenValue="300" yieldRate="3"/>
        </div>
    )

}