const SocialLinks = () => {
  const links = [
    {
      icon: <i className="text-2xl fa-brands fa-github"></i>,
      link: "",
    },
    {
      icon: <i className="text-2xl fa-brands fa-linkedin-in"></i>,
      link: "",
    },
  ];
  return (
    <div className="text-black dark:text-white flex flex-col items-center gap-4 fixed bottom-0 left-6">
      {links.map((item, index) => {
        return (
          <button
            key={`${index}-social-link`}
            className="hover:cursor-pointer hover:text-amber-500"
          >
            {item.icon}
          </button>
        );
      })}

      <div className="w-[2px] bg-black dark:bg-white h-[100px]"></div>
    </div>
  );
};
export default SocialLinks;
