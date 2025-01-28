import React from "react"

const CoverArt = ({ imageUrl }) => {
  return (
    <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow-lg">
      <img src={ imageUrl || "../assets/placeholder.svg"} alt="Album Cover" className="w-full h-full object-cover" />
    </div>
  )
}

export default CoverArt