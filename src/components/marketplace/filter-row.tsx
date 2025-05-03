"use client"
import CustomSlider from "./filterComponent/custom-slider"
import LocationBox from "./filterComponent/location-box"

export default function FilterRow() {
    return(
        <div className="w-full h-fit flex justify-evenly items-center">
            <LocationBox/>
            <CustomSlider label="Token Price" maxValue={30} symbol="USDT" width="20vw"/>
            <CustomSlider label="Yield Rate" maxValue={30} symbol="%" width="10vw"/>
        </div>

    )
}