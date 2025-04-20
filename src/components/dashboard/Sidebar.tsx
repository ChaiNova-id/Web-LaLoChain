import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-[20vw] bg-blue-950 text-neutral-400 px-[2.44vw] py-[3.252vw]">
      <h2 className="text-[1.9vw] font-medium text-white mb-[4.065vw]">
        Property Owner
      </h2>
      <nav className="space-y-[1.626vw] flex-1">
        <Button
          variant="ghost"
          className="text-[1.1vw] px-[2vw] py-[1.2vw] w-[10vw] justify-start cursor-pointer hover:bg-blue-800 hover:text-neutral-100"
        >
          Dashboard
        </Button>
        <Button
          variant="ghost"
          className="text-[1.1vw] px-[2vw] py-[1.2vw] w-[10vw] justify-start cursor-pointer hover:bg-blue-800 hover:text-neutral-100"
        >
          Properties
        </Button>
        <Button
          variant="ghost"
          className="text-[1.1vw] px-[2vw] py-[1.2vw] w-[10vw] justify-start cursor-pointer hover:bg-blue-800 hover:text-neutral-100"
        >
          Analytics
        </Button>
        <Button
          variant="ghost"
          className="text-[1.1vw] px-[2vw] py-[1.2vw] w-[10vw] justify-start cursor-pointer hover:bg-blue-800 hover:text-neutral-100"
        >
          Settings
        </Button>
      </nav>
      <Button
        variant="link"
        className="mt-auto text-[1.1vw] text-neutral-400 cursor-pointer"
      >
        Logout
      </Button>
    </aside>
  );
};

export default Sidebar;
