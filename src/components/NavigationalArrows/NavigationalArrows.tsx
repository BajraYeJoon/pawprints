"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cn } from "@/lib/utils";

interface NavigationArrowsProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  horizontal?: boolean;
}

const NavigationArrows = ({
  direction,
  onClick,
  disabled,
  horizontal,
}: NavigationArrowsProps) => {
  return (
    <div
      className={cn(
        "group flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF7F4] hover:bg-primary",
        {
          "cursor-not-allowed opacity-50": disabled,
        },
      )}
      onClick={onClick}
    >
      {direction === "prev" ? (
        <IoIosArrowBack
          className={cn("group-hover:text-white", {
            "text-gray-400": disabled,
            "rotate-90": horizontal,
          })}
        />
      ) : (
        <IoIosArrowForward
          className={cn("group-hover:text-white", {
            "text-gray-400": disabled,
            "rotate-90": horizontal,
          })}
        />
      )}
    </div>
  );
};

export { NavigationArrows };
