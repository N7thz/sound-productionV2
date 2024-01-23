import { Dispatch, HTMLProps, MutableRefObject, SetStateAction } from "react"

export interface PlayerAudioProps extends HTMLProps<HTMLDivElement> { }

export interface Audio {

    id: number
    audioURL: string
}

export interface AudioContextProps {

    audioRef: MutableRefObject<HTMLAudioElement | null>
    audio : Audio | undefined
    setAudio: Dispatch<SetStateAction<Audio | undefined>>
    audioList: Audio[]
}
