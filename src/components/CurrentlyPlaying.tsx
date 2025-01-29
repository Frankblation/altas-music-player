
import CoverArt from "./CoverArt.tsx"
import SongTitle from "./SongTitle.tsx"
import PlayControls from "./PlayControls.tsx"
import VolumeControls from "./VolumeControls.tsx"

const CurrentlyPlaying = ({ song = {} }) => {
  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-white rounded-lg shadow-lg">
      <CoverArt imageUrl={song.coverArt} />
      <SongTitle title={song.title || "No Song Playing"} artist={song.artist || "Unknown Artist"} />
      <PlayControls />
      <VolumeControls />
    </div>
  )
}

export default CurrentlyPlaying

