import * as React from "react";

import "./button.css";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ children, ...props }) => <button {...props}>{children}</button>;
