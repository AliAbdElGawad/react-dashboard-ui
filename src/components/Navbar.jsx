import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/16/solid";
import { TextInput } from "@tremor/react";

const Navbar = () => {
  return (
    <div
      className="relative items-center justify-between w-full p-2 sm:flex"
      id="top"
    >
      <h1 className="font-bold text-gray-300">Dashboard</h1>
      <div className="py-2">
        <TextInput icon={SearchIcon} placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;
