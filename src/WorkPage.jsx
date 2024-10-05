import "./WorkPage.css";
import CadProject from "./projects/CadProject";
import CircuitsProject from "./projects/CircuitsProject";
import LightSculptureProject from "./projects/LightScuptureProject";
import { useState } from "react";

export default function WorkPage({ changePage, visible, full }) {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    { name: "CAD Skateboard", page: <CadProject /> },
    { name: "Electric Circuits", page: <CircuitsProject /> },
    { name: "Light Sculpture", page: <LightSculptureProject /> },
  ];

  return (
    <div
      className={"work-page" + (full ? " full" : "")}
      style={{ display: visible ? "block" : "none" }}
      onClick={() => {
        if (window.scrollY / window.innerHeight < 2) {
          changePage("work");
        }
      }}
    >
      {/* <div className="work-page-inner"> */}
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
              window.scrollTo(0, 2 * window.innerHeight);
            }}
            key={i}
          >
            {p.name}
          </div>
        ))}
      </div>
      <div className="divider"></div>
      {projects[currentProject].page}
      {/* </div> */}
    </div>
  );
}
