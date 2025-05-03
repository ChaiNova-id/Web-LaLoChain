import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-[615px] mx-auto mt-4">
      <Input
        placeholder="Search in site"
        className="pr-10 h-12 rounded-md border-neutral-400 focus-visible:ring-0"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
    </div>
  );
};

export default SearchBar;
