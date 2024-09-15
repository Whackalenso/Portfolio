import "./WorkPage.css";
import CadProject from "./projects/CadProject";
import LightSculptureProject from "./projects/LightScuptureProject";
import { useState } from "react";

export default function WorkPage({ visible }) {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    { name: "CAD Skateboard", page: <CadProject /> },
    { name: "Light Sculpture", page: <LightSculptureProject /> },
  ];

  return (
    <div className="work-page" style={{ display: visible ? "block" : "none" }}>
      <h2 className="page-title">My Work</h2>
      <div className="gradient"></div>
      <div className="sidebar">
        {projects.map((p, i) => (
          <div
            className={
              "sidebar-item" + (currentProject == i ? " selected" : "")
            }
            onClick={() => {
              setCurrentProject(i);
            }}
          >
            {p.name}
          </div>
        ))}
      </div>
      <div className="divider"></div>
      {projects[currentProject].page}
    </div>
  );
}
