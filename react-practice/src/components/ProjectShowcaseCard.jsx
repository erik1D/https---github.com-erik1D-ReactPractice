function ProjectShowcaseCard(){
  let title = "My Project Showcase Card";
  let description = <a href="https://erik1d.github.io/Semester-2/User%20Profile%20Project/profilepage.html">This is my Profile Page Project</a>;
  let emoji = "📝";

  return (
    <div className="Card" style={{backgroundColor: "white", borderRadius: "20px"}}>
      <p style={{fontSize: "32px"}}>{emoji}</p>
      <h3>{title}</h3>
      <p style={{padding: "20px"}}>{description}</p>
    </div>
  )
}

export default ProjectShowcaseCard