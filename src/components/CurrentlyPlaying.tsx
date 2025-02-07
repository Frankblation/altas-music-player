import type React from "react"
import CoverArt from "./CoverArt"
import SongTitle from "./SongTitle"
import PlayControls from "./PlayControls"
import AudioPlayer from "./AudioPlayer"

interface Song {
  id: string
  title: string
  artist: string
  cover: string
  song: string
}

interface CurrentlyPlayingProps {
  songs: Song[]
  currentSongIndex: number
  setCurrentSongIndex: (index: number) => void
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  volume: number
  setVolume: (volume: number) => void
  speed: number
  isShuffle: boolean
  handlePlaybackControls: {
    togglePlay: () => void
    nextSong: () => void
    previousSong: () => void
    changeSpeed: () => void
    toggleShuffle: () => void
  }
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  isPlaying,
  setIsPlaying,
  volume,
  setVolume,
  speed,
  isShuffle,
  handlePlaybackControls,
}) => {
  const currentSong = songs[currentSongIndex]

  if (!currentSong) {
    return <div>No song playing</div>
  }

  return (
    <div className="flex flex-col rounded-3xl items-center space-y-6 p-6 bg-white
     shadow-lg">
      <CoverArt cover={currentSong.cover} />
      <SongTitle title={currentSong.title} artist={currentSong.artist} />

      <PlayControls
        isPlaying={isPlaying}
        togglePlay={handlePlaybackControls.togglePlay}
        playNextSong={handlePlaybackControls.nextSong}
        playPreviousSong={handlePlaybackControls.previousSong}
        isShuffle={isShuffle}
        toggleShuffle={handlePlaybackControls.toggleShuffle}
        speed={speed}
        toggleSpeed={handlePlaybackControls.changeSpeed}
        volume={volume}
        setVolume={setVolume}
      />

      <AudioPlayer
        playlist={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isShuffle={isShuffle}
        volume={volume}
        speed={speed}
      />
    </div>
  )
}

export default CurrentlyPlaying

