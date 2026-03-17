import { useState } from "react";

function LikeButton (){
    const [likes, setLikes] = useState(0);
    return(
        <button onClick={() => setLikes(likes + 1)} className="bg-red-300 rounded-4xl w-20 h-10">
            <span className="text-xl">❤️</span>
            <span className="font-bold text-gray-700">{likes}</span>
        </button>
    );
}

export default LikeButton