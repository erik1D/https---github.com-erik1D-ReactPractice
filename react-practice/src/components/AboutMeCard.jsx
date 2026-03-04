function AboutMeCard({myName,myTitle,my1stPic,my2ndPic,myBlurb}){


  return (
    <div className="Card" style={{backgroundColor: "white", borderStyle: "solid", borderColor: "#b1b1b1", border: "3px", borderRadius: "20px", margin: "20px", padding: "20px" }}>
      <h1 style={{fontSize: "32px", textDecoration: "underline"}}>{myName}</h1>
      <h1>{myTitle}</h1>
      <p>{myBlurb}</p>
      <img src={my1stPic} alt="Person programming" style={{margin: "25px", width: "350px", display: "inline"}}/>
      <img src={my2ndPic} alt="Oakland Technical High" style={{margin: "auto", width: "350px", display: "inline"}}/>
    </div>
  )
}

export default AboutMeCard