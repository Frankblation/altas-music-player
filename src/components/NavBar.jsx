import React from "react"

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Music Player</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              Library
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

