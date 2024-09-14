import NavButton from "./components/NavButton";

export default function AboutPage({changePage}) {
  return <div>
    about me
    <NavButton text="home" value="home" side="bottom" callback={changePage}/>
  </div>
}