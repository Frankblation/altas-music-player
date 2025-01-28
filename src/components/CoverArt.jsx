import React from "react"
import placeholder from  "../assets/placeholder.svg"

const CoverArt = ({ imageUrl }) => {
  return (
    <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-black">
      <img src={ placeholder  || imageUrl } alt="Album Cover" className="max-w-full max-h-full object-cover" />
    </div>
  )
}

export default CoverArt