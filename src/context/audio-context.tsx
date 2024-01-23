"use client"

import { AudioContextProps, Audio } from "@/types"
import {

    ReactNode,
    createContext,
    useContext,
    useRef,
    useState
} from "react"

import audiosData from "@/audios.json"

const AudioContext = createContext({} as AudioContextProps)

export function AudioProvider({ children }: { children: ReactNode }) {

    const { audios: audioList } = audiosData

    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [audio, setAudio] = useState<Audio | undefined>(audioList[0])
    
    return (

        <AudioContext.Provider value={{
            audioRef, 
            audio, setAudio,
            audioList,
        }}>
            {children}
        </AudioContext.Provider>
    )
}

export const useAudio = () => useContext(AudioContext)