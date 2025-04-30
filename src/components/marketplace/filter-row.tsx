import CustomSlider from "./filterComponent/custom-slider"
import LocationBox from "./filterComponent/location-box"

export default function FilterRow() {
    return(
        <div className="w-full h-fit flex justify-evenly items-center p-2">
            <LocationBox/>
            <CustomSlider label="Token Price" maxValue={50000} symbol="USD" />

        </div>

    )
}