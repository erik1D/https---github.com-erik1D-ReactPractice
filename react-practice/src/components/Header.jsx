import { useState } from "react";

function Header(){    
const [isOpen, setIsOpen] = useState(false)
   
    return(
<header>
    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
        {isOpen ? "✖︎" : "☰"}
    </button>
    {isOpen && (
    <div className="bg-[#c6c6c6] p-5 font-serif text-2xl ">
        <a href="" className="m-4 hover:text-white">Home</a>
        <a href="" className="m-4 hover:text-white">Contact</a>
        <a href="" className="m-4 hover:text-white">Our Goal</a>
    </div>
    )}
</header>  
    );
}

export default Header