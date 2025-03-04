import Link from "next/link";

const EmailLink = () => {
  const email = "andrewdcabrera@gmail.com";

  return (
    <div className="fixed bottom-0 right-6 flex flex-col">
      <Link
        href={`mailto:${email}`}
        className="text-black dark:text-white rotate-90 w-[10px] relative bottom-[200px] right-[4px]"
      >
        {email}
      </Link>
      <div className="w-[2px] bg-black dark:bg-white h-[100px]"></div>
    </div>
  );
};

export default EmailLink;
