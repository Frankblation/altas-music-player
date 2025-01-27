import React from "react"

export default function PlayListItem({ song, onSelect, isActive }) {
  return (
    <li
      className={`flex justify-between items-center py-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-100 ${isActive ? "bg-blue-100" : ""}`}
      onClick={onSelect}
    >
      <div>
        <h3 className={`font-semibold ${isActive ? "text-blue-600" : ""}`}>{song.title}</h3>
        <p className="text-sm text-gray-600">{song.artist}</p>
      </div>
      <span className="text-sm text-gray-600">{song.duration}</span>
    </li>
  )
}

