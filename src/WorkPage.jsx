import "./WorkPage.css";
import SidebarItem from "./components/SidebarItem";
import NavButton from "./components/NavButton";
import CadProject from "./projects/CadProject";

export default function WorkPage({changePage}) {
  return <div className="workPage">
    <NavButton text="home" value="home" side="top" callback={changePage}/>
    <h2 className="title">My Work</h2>
    <div className="sidebar">
      <SidebarItem name="CAD" page={<CadProject/>}/>
      <SidebarItem name="Dunkin' Detector" page={<CadProject/>}/>
    </div>
    <div className="divider"></div>
    <div className="body">
      <CadProject/>
    </div>
  </div>
}