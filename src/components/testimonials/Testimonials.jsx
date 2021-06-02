import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "About Me",
      title: "Fullstack Developer",
      
      desc:"Enthusiastic web developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. And passionate about learning new things and good at doing that.",
        
    },
   
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>About me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
         
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
