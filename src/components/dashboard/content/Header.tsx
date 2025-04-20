import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-[3.252vw]">
      <h1 className="text-[2.6vw] font-semibold text-neutral-800 cursor-pointer">
        Property Dashboard
      </h1>
      <Button className="flex items-center py-[1.2vw] cursor-pointer">
        <Plus className="w-[2vw] h-[2vw]" />
        <span className="text-[1vw]">Register New Property</span>
      </Button>
    </div>
  );
};

export default Header;
