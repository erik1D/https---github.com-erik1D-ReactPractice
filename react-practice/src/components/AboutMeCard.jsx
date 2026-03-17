import { useState } from "react"

function AboutMeCard({myName,myTitle,myEmoji,myBlurb, mySkills}){
  const [showMore, setShowMore] = useState(false);


  return (
    <div className="Card bg-sky-50 border-5 border-[#c6c6c6] rounded-[20px] m-[20px] p-[20px] w-80 inline-block">
      <h1 className="underline text-3xl ">{myName}</h1>
      <p className="p-5 text-4xl">{myEmoji}</p>
      <h1 className="p-2">{myTitle}</h1>
      <p>{myBlurb}</p>         
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "▲ Show Less" : "▼ Show More"}
      </button>
      {showMore && (
      <p>{mySkills}</p>
      )}
    </div>    
  )
}

export default AboutMeCard