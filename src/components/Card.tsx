import React, { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  title?: string
  description?: string
  style?: React.CSSProperties;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  style,
  children
}) => {
  return (
    <div className="Card" style={style}>
      <h1 className="Title">{title}</h1>
      <h2 className="Description">{description}</h2>
      {children}
    </div>
  )
}

export { Card };