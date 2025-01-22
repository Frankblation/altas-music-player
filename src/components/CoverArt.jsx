import React from "react"

export default function CoverArt({ coverUrl, title, artist, className = "w-full h-64 md:h-80" }) {
  return (
    <div className={`relative bg-gray-200 rounded-lg overflow-hidden shadow-lg ${className}`}>
      <img
        src={coverUrl || "https://via.placeholder.com/400x400?text=Cover+Art"}
        alt={title ? `${title} by ${artist}` : "Cover Art"}
        className="w-full h-full object-cover"
      />
      {(title || artist) && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          {title && <h2 className="text-xl font-bold truncate">{title}</h2>}
          {artist && <p className="text-sm truncate">{artist}</p>}
        </div>
      )}
    </div>
  )
}

