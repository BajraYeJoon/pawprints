import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg tracking-wide font-medium leading-7 cursor-pointer disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-background/20 hover:text-background",

        secondary:
          "bg-white border border-primary text-primary hover:bg-primary hover:text-white",
        link: "text-primary hover:text-primary/80",
      },
      size: {
        default: "px-12 py-4",
        reset: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  showIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, size, showIcon, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {!showIcon && <MoveRightIcon size={30} className="ml-2" />}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
