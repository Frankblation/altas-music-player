import React from "react"

export default function PlayListItem({ song }) {
  return (
    <li className="flex justify-between items-center py-2 border-b last:border-b-0">
      <div>
        <h3 className="font-semibold">{song.title}</h3>
        <p className="text-sm text-gray-600">{song.artist}</p>
      </div>
      <span className="text-sm text-gray-600">{song.duration}</span>
    </li>
  )
}

