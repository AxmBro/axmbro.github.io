import React from "react";
import "./Contact.css";
import "./Screen.css";
import {ScreenSection} from "../components/ScreenSection.tsx";

function Contact() {
  return (
    <div className="contact screen">
      <ScreenSection
        children={
          <>
            <h1>Contact Screen WOWOWOWOWO</h1>
          </>
        }
      ></ScreenSection>
    </div>
  );
}

export default Contact;
