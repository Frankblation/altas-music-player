import React from "react"
import { Settings, SkipBack, Play, SkipForward, Shuffle } from "lucide-react"

const PlayControls = () => {
  return (
    <div className="flex justify-center items-center space-x-6">
      <button className="text-gray-600 hover:text-gray-800">
        <Settings size={24} />
      </button>
      <button className="text-gray-600 hover:text-gray-800">
        <SkipBack size={24} />
      </button>
      <button className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600">
        <Play size={24} fill="currentColor" />
      </button>
      <button className="text-gray-600 hover:text-gray-800">
        <SkipForward size={24} />
      </button>
      <button className="text-gray-600 hover:text-gray-800">
        <Shuffle size={24} />
      </button>
    </div>
  )
}

export default PlayControls

