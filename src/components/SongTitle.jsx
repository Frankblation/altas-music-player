import React from "react"

export default function SongTitle({ title, artist }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold truncate">{title}</h2>
      <p className="text-gray-600 truncate">{artist}</p>
    </div>
  )
}

