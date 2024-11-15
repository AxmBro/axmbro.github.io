import React, { ReactNode } from "react";
import "./ScreenSection.css";

interface ScreenSectionProp {
  children?: ReactNode;
  title?: string
  description1?: string
  description2?: string
  style?: React.CSSProperties;
}

const ScreenSection: React.FC<ScreenSectionProp> = ({
  children,
  title,
  description1,
  description2,
  style
}) => {
  return (
    <div className="ScreenSection" style={style}>
      {title ? <h1>{title}</h1> : null}
      {description1 ? <h2 style={{ paddingBottom: description2 ? "1rem" : 0 }}>{description1}</h2> : null}
      {description2 ? <h2>{description2}</h2> : null}
      <div
        style={{
          paddingTop: ((children && (title || description1 || description2)) ? "1rem" : 0)
        }}>
        {children}
      </div>
    </div>
  )
}

interface ScreenSectionListProps {
  title?: string
  items: { name: string, value: string }[]
  style?: React.CSSProperties;
}

const ScreenSectionList: React.FC<ScreenSectionListProps> = ({
  title,
  items,
  style
}) => {
  return (
    <div className="ScreenSectionList" style={style}>
      {title ? <h1>{title}</h1> : null}
      <ul>
        {items.map((item, index) => {
          return <li key={`li${index}`}>{item.name}: <span key={`span${index}`}>{item.value}</span></li>
        })}
      </ul>
    </div>
  )
}

export { ScreenSection, ScreenSectionList };