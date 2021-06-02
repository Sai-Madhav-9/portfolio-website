import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Fullstack Food delivery website",
      desc:
        "Developed a full stack website which connects small restaurants,curry points, fast food centers in 5 km radius of our college campus using geoloction API.I have made this website using ejs,tailwind,node/express,mongoDB stack and socket io for live tracking and integrated it with stripe js payment gateway.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        
        link:"https://foodkings.herokuapp.com/",
        gitlink:"",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Video chat website",
      desc:
        "This website is done in react js using webRTC API , currently this website is still under consruction",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
       
        link:"WEBSITE UNDER CONSTRUCTION",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Ecommerce website",
      desc:
        "Currently doing front end part in it using react this porject still has a long way to go",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
       
        link:"WEBSITE UNDER CONSTRUCTION",
    },
  
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Project link: <a href={d.link}target="_blank" rel="noreferrer"> {d.link}</a> </span>
                  <div> <span>Project link: <a href={d.link}target="_blank" rel="noreferrer"> {d.link}</a> </span> </div>
                </div>
              </div>
            
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
