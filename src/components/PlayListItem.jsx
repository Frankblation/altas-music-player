import React from "react"

const PlayListItem = ({ title, artist, length, isSelected }) => {
  return (
    <div className={`flex justify-between items-center p-3 ${isSelected ? "bg-blue-100" : "hover:bg-gray-100"}`}>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{artist}</p>
      </div>
      <span className="text-sm text-gray-500">{length}</span>
    </div>
  )
}

export default PlayListItem

