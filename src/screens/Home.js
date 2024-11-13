import React from "react";
import "./Home.css";
import "./Screen.css";
import {
  ScreenSection,
  ScreenSectionList,
} from "../components/ScreenSection.tsx";

function Home() {
  return (
    <div className="home screen">
      <ScreenSection
        title="About Me"
        description1="Hey! I am Axmbro, because Ambro was taken everywhere! I am a guy from Poland who wants to create fancy and cool things in computer!"
        description2="I play a lot Minecraft Bedrock and in this game I started to create random stuff related with user interface - UI. Then moved to entity models, animations, general entity logic, and by combining all of these elements Better Bedrock was created!"
      ></ScreenSection>
      <ScreenSection
        title="Programming Skills"
        description1="This is a list of my skills based on my opinion with knowledge rating up to 10."
        children={
          <ScreenSectionList
            style={{ padding: 0, border: 0 }}
            items={[
              { name: "HTML", value: "7/10" },
              { name: "CSS", value: "5/10" },
              { name: "JAVASCRIPT", value: "6/10" },
              { name: "Github", value: "6/10" },
              { name: "Visual Studio Code", value: "7/10" },
              { name: "BlockBench", value: "5/10" },
              { name: "Python", value: "4/10" },
              { name: "React", value: "2/10" },
              { name: "JSON", value: "10/10" },
            ]}
          ></ScreenSectionList>
        }
      ></ScreenSection>
      <ScreenSectionList
        title="Languages"
        items={[
          {
            name: "Polish",
            value: "Native",
          },
          {
            name: "English",
            value: "B2, Learning",
          },
        ]}
      ></ScreenSectionList>
      <ScreenSectionList
        title="Contact"
        items={[
          { name: "Email", value: "axmbro@gmail.com" },
          { name: "Discord", value: "AxmBro" },
          { name: "Discord Server", value: "discord.gg/wJhH86c2wb" },
          { name: "YouTube", value: "@axmbro" },
        ]}
      ></ScreenSectionList>
    </div>
  );
}

export default Home;
