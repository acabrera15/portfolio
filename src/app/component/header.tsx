import { Burger } from "./navbar/burger";

const Header = () => {
  return (
    <div className="bg-red-800 h-[50] flex items-center justify-between w-full px-6">
      {/* avatar */}
      <div className="rounded-full h-12 w-12 bg-black"></div>
      <div className="flex gap-10 items-center">
        {/* resume link */}
        <button className="rounded-lg border w-fit h-fit px-4 py-1 hover:opacity-75">
          Resume
        </button>

        {/* menu */}
        <Burger />
      </div>
    </div>
  );
};

export default Header;
