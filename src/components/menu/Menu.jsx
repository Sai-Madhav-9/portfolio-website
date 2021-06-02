import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">My Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">My Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">About me</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </div>
  );
}
