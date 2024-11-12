import React from "react";
import "./Home.css";
import "./Screen.css";
import ScreenSection from "../components/ScreenSection";

function Home() {
  return (
    <div className="home screen">
      <ScreenSection
        children={
          <>
            <h1>Elo</h1>
          </>
        }
      ></ScreenSection>
    </div>
  );
}

export default Home;
