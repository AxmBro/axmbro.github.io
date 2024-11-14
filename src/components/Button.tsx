import React, { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  text?: string,
  children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({
  text,
  children
}) => {
  return <div className="Button">{text ? text : null} {children}</div>
}

export default Button
