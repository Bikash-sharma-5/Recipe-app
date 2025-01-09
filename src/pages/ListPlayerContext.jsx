import { createContext } from "react"

export const ListPlayerContext = createContext({
  selectedTrack: -1,
  isPlaying: false,
  isMuted: false,
  setSelectedTrack: () => {},
  setIsPlaying: () => {},
  setIsMuted: () => {}
})
