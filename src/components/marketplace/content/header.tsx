import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  type Filter = {
    label: string;
    value: string;
  };

  const filterSelect: Filter[] = [{ label: "Sort1", value: "sort1" }];

  return (
    <div className="flex items-center justify-between mb-[3.252vw]">
      <h1 className="text-[2.6vw] font-semibold text-neutral-800 cursor-pointer">
        Token Marketplace
      </h1>
      <Select>
        <SelectTrigger className="w-[10vw] text-[1vw]">
          <SelectValue placeholder="Sort by ROI" />
        </SelectTrigger>
        <SelectContent>
          {filterSelect.map((item) => (
            <SelectItem
              className="text-[1vw]"
              key={item.value}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Header;
