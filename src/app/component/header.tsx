import { Avatar } from "flowbite-react";
import { Burger } from "./navbar/burger";

const Header = () => {
  return (
    <div className="h-[50] flex items-center justify-between w-full px-6">
      {/* avatar */}
      <Avatar className="w-10 h-10" img={'/andrew_avatar.webp'} alt="andrew" rounded />

      <div className="flex gap-10 items-center">
        {/* resume link */}
        <button className="dark:text-white rounded-lg border w-fit h-fit px-4 py-1 hover:opacity-75">
          Resume
        </button>

        {/* menu */}
        <Burger />
      </div>
    </div>
  );
};

export default Header;
