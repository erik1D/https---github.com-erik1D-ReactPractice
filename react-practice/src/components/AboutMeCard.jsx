function AboutMeCard({myName,myTitle,my1stPic,my2ndPic,myBlurb}){


  return (
    <div className="Card bg-sky-50 border-5 border-[#c6c6c6] rounded-[20px] m-[20px] p-[20px]">
      <h1 className="underline text-3xl ">{myName}</h1>
      <h1>{myTitle}</h1>
      <p>{myBlurb}</p>
      <img src={my1stPic} alt="Person programming" style={{margin: "25px", width: "350px", display: "inline"}}/>
      <img src={my2ndPic} alt="Oakland Technical High" style={{margin: "auto", width: "350px", display: "inline"}}/>
    </div>
  )
}

export default AboutMeCard