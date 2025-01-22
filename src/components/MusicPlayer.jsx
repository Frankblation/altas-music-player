import React, { useState } from "react"
import CoverArt from "./CoverArt"

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Awesome Song",
    artist: "Amazing Artist",
    coverUrl: "https://via.placeholder.com/400x400?text=Awesome+Song",
  })

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xl mx-auto">
      <CoverArt coverUrl={currentTrack.coverUrl} title={currentTrack.title} artist={currentTrack.artist} />
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{currentTrack.title}</h2>
        <p className="text-gray-600">{currentTrack.artist}</p>
      </div>
      <div className="mt-4 flex justify-center items-center space-x-4">
        <button className="bg-blue-500 text-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="bg-blue-500 text-white p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

