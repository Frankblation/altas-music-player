import React from "react"
import placeholder from  "../assets/placeholder.svg"

const CoverArt = ({ imageUrl }) => {
  return (
    <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow-lg">
      <img src={ placeholder  || imageUrl } alt="Album Cover" className="w-full h-full object-cover" />
    </div>
  )
}

export default CoverArt