import React, { CSSProperties } from "react";

// Define allowed tags
type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type PolymorphicProps = React.PropsWithChildren<{
  tag: TagVariants;
  className?: string;
  style?: CSSProperties;
}>;

export function Typography({
  tag,
  children,
  className,
  style,
  ...props
}: PolymorphicProps) {
  const Component = tag;
  return (
    <Component className={className} style={style} {...props}>
      {children}
    </Component>
  );
}

Typography.displaName = "Typography";
