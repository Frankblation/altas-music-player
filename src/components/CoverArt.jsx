import React, { useState, useEffect } from "react"

export default function CoverArt({ coverId }) {
  const [coverData, setCoverData] = useState(null)

  useEffect(() => {
    // Simulating data fetching based on coverId
    // Replace this with your actual data fetching logic
    const fetchCoverData = async () => {
      try {
        // Simulated API call
        const response = await fetch(`https://api.example.com/cover/${coverId}`)
        const data = await response.json()
        setCoverData(data)
      } catch (error) {
        console.error("Error fetching cover data:", error)
      }
    }

    fetchCoverData()
  }, [coverId])

  return (
    <div className="relative w-[400px] h-[400px] bg-gray-200 rounded-lg overflow-hidden">
      <img
        src={`https://via.placeholder.com/400x400?text=Cover+Art`}
        alt="Cover Art"
        className="w-full h-full object-cover"
      />
      {coverData && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-xl font-bold truncate">{coverData.title}</h2>
          <p className="text-sm truncate">{coverData.artist}</p>
        </div>
      )}
    </div>
  )
}

