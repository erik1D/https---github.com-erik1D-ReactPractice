function DreamJobCard(){
  let title = "My Dream Job";
  let description = "My Dream Job is a Software Engineer/Developer, I like coding, ~$132,268";
  let emoji = "🧑‍💻";

  return (
    <div className="Card" style={{backgroundColor: "white", borderRadius: "20px"}}>
      <p style={{fontSize: "32px"}}>{emoji}</p>
      <h3>{title}</h3>
      <p style={{padding: "20px"}}>{description}</p>
    </div>
  )
}

export default DreamJobCard