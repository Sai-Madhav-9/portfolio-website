import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  frontPortfolio,
  backendPortfolio,
  toolsPortfolio,
  designPortfolio,
  
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontend",
      title: "Front-end",
    },
    {
      id: "backend",
      title: "Back-end",
    },
    {
      id: "tools",
      title: "Other tools/skills",
    },
    {
      id: "design",
      title: "Other languages",
    },
  
  ];

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setData(frontPortfolio);
        break;
      case "backend":
        setData(backendPortfolio);
        break;
      case "tools":
        setData(toolsPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      
      default:
        setData(frontPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>My Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
