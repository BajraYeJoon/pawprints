import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm  tracking-wide font-workSans font-medium leading-7 cursor-pointer disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:opacity-[0.95]",

        secondary:
          "bg-white border border-primary text-primary hover:bg-primary hover:text-white hover:border-background",
        link: "text-primary hover:text-primary/80",
      },
      size: {
        default: "w-full md:w-fit py-2 md:px-8 md:py-3",
        reset: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  hideIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, size, hideIcon, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {!hideIcon && <MoveRightIcon size={20} className="ml-2" />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
