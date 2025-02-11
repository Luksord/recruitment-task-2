import * as React from "react";

import "./title.css";

export const Title: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
}) => <span className="title">{children}</span>;
