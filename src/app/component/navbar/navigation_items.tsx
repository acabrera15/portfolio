import Link from "next/link";

const CONTAINER_DIAMETER = 800;
const X_PADDING_OFFSET = -12;
const Y_PADDING_OFFSET = 0;

interface NavigationItemsProps {
  links: { link: string; text: string; color: string }[];
  open: boolean;
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({
  links,
  open,
}) => {
  return (
    <div
      style={{
        width: `${CONTAINER_DIAMETER}px`,
        height: `${CONTAINER_DIAMETER}px`,
        top: `-${CONTAINER_DIAMETER / 2 + Y_PADDING_OFFSET}px`,
        right: `-${CONTAINER_DIAMETER / 2 + X_PADDING_OFFSET}px`,
        transform: `scale(${open ? 1 : 0})`,
        opacity: open ? 1 : 0,
        transition: `transform 0.6s ease-in-out, opacity 0.6s ease-in-out`,
        transformOrigin: "center",
      }}
      className={`rounded-full absolute rotate-45 transition-all duration-1000 z-0`}
    >
      {links.map((item, index) => {
        return (
          <Link
            key={`${index}-nav-link`}
            href={item.link}
            style={{
              width: `${CONTAINER_DIAMETER - 100 * index}px`,
              height: `${CONTAINER_DIAMETER - 100 * index}px`,
              top: `${50 * index}px`,
              left: `${50 * index}px`,
              backgroundColor: item.color,
              zIndex: index,
              transform: `rotate(${open ? 0 : 180}deg) scale(${open ? 1 : 0})`,
              transformOrigin: "center",
              transition: `transform 0.5s ease-in-out ${index * 50}ms`,
            }}
            className={`shadow-2xl hover:scale-105 hover:text-[18px] text-[14px] transition-all duration-1000 text-red-500 absolute rounded-full`}
          >
            <p className="absolute bottom-[15px] left-[50%] right-[50%]">
              {item.text}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
