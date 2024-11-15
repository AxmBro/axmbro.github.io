import React from "react";
import "./Projects.css";
import "./Screen.css";
import { ScreenSection } from "../components/ScreenSection.tsx";

function Projects() {
  return (
    <div className="projects screen">
      <ScreenSection
        style={{padding: "1rem 0 0 0", border: "none"}}
        title="Projects"
        description1="Here is a list of all the projects I've worked on or contributed to! Most of them are detailed with videos and screenshots for a closer look at my work."
        children={
          <>
            <ProjectsGrid
              items={[
                {
                  title: "Better Bedrock",
                  description: "The Better Bedrock is project of Texture Pack for Minecraft Bedrock Edition, Website and Mobile App available only for Android. The Main goal is to improve the default Minecraft gameplay to a whole new level with many new features!",
                  tags: ["JSON", "Minecraft Bedrock JsonUI", "Flutter", "Supabase", "Windows API"]
                },
                {
                  title: "Shop UI - Server Form",
                  description: "Custom server form UI created for personal use, but also to test custom tabs in vanilla style, many texts in each button and search feature!",
                  tags: ["JSON", "Minecraft Bedrock JsonUI"]
                },
                {
                  title: "Hometree UI - Server Form",
                  description: "Custom server form UI created for customer. It's pretty colorful and simple grid UI used in gamemodes selector and extra information form!",
                  tags: ["JSON", "Minecraft Bedrock JsonUI"]
                },
                {
                  title: "Simple UI - Server Form",
                  description: "Custom server form UI created for personal use, but also to test custom buttons layout!",
                  tags: ["JSON", "Minecraft Bedrock JsonUI"]
                },
                {
                  title: "This Website",
                  description: "TODO",
                  tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React"]
                },
                {
                  title: "One Block Slime Block Adventure - HUD, Server Form",
                  description: "TODO",
                  tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React"]
                }
              ]}>

            </ProjectsGrid>
          </>
        }
      ></ScreenSection>
    </div>
  );
}

interface ProjectsGridProps {
  items: { title: string, description: string, tags?: string[] }[]
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ items }) => {
  return <div className="ProjectsGrid">
    {items.map((item, index) => {
      return <div key={`ProjectsGridKey${index}`} className="ProjectsGridItem">
        <div className="Image"></div>
        <h1 className="Title">{item.title}</h1>
        <h2 className="Description">{item.description}</h2>
        {item.tags ?
          <div className="TagsContainer">
            {
              item.tags.map((tag, index) => {
                return <h2 key={`TagKey${index}`} className="Tag">{tag}</h2>
              })
            }
          </div> : ""}
      </div>
    })}
  </div>
}

export {Projects, ProjectsGrid};
