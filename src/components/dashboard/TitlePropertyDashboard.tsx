import { Button } from "../ui/button";

const TitlePropertyDashboard = () => {
  return (
    <div className="w-full mt-[60px] mb-[30px] self-stretch inline-flex justify-between items-center">
      <div className="flex justify-start items-start gap-2.5 cursor-default">
        <div className="justify-start text-brand-500 heading-4 ">
          Property Dashboard
        </div>
      </div>
      <Button
        // onClick={}
        variant="primaryBrand"
        className="w-40 p-6 text-neutral-50 body-1 cursor-pointer"
      >
        Add Property
      </Button>
    </div>
  );
};

export default TitlePropertyDashboard;
