"use client"

import React, { ChangeEvent, useEffect, useState } from "react"
import { Play, Pause, Volume2, Volume1, VolumeX } from "lucide-react"
import { Progress } from "./ui/progress"
import { formatDuration } from "@/lib/utils"
import { PlayerAudioProps } from "@/types"

import { useAudio } from "@/context/audio-context"
import Image from "next/image"

export const PlayerAudio: React.FC<PlayerAudioProps> = ({ ...otherProps }) => {

    const { audioRef, audio } = useAudio()

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isMute, setIsMute] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number | null>(null)
    const [duration, setDuration] = useState<number | null>(null)
    const [progress, setProgress] = useState<number>(0)
    const [volume, setVolume] = useState<string>('100')
    const [prevVolume, setPrevVolume] = useState<string>('0')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateProgress = () => {

        if (audioRef.current && duration !== null) {

            const percentage = (audioRef.current.currentTime / duration) * 100
            setProgress(percentage)
        }
    }

    useEffect(() => {

        const updateCurrentTime = () => {

            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime)
            }
        }

        const updateDuration = () => {

            if (audioRef.current) {

                setDuration(audioRef.current.duration)
            }
        }

        if (audioRef.current) {

            audioRef.current.addEventListener('timeupdate', updateCurrentTime)
            audioRef.current.addEventListener('loadedmetadata', updateDuration)
        }

        return () => {

            if (audioRef.current) {

                audioRef.current.removeEventListener('timeupdate', updateCurrentTime)
                // eslint-disable-next-line react-hooks/exhaustive-deps
                audioRef.current.removeEventListener('loadedmetadata', updateDuration)
            }
        }

    }, [audioRef])

    useEffect(() => {

        if (audioRef.current) {

            audioRef.current.addEventListener('timeupdate', updateProgress)
        }

        return () => {

            if (audioRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                audioRef.current.removeEventListener('timeupdate', updateProgress)
            }
        }

    }, [audioRef, updateProgress])

    const playSong = () => {

        if (audioRef.current) {

            isPlaying
                ? audioRef.current.pause()
                : audioRef.current.play()

            setIsPlaying(!isPlaying)
        }
    }

    const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {

        setVolume(e.target.value)
        if (audioRef.current) {

            Number(volume) > 10
                ? audioRef.current.volume = Number(volume) / 100
                : audioRef.current.volume = 0
        }
    }

    const activeMute = () => {

        if (audioRef.current) {

            if (isMute) {

                setVolume(prevVolume)
                audioRef.current.volume = Number(prevVolume) / 100
            } else {

                setPrevVolume(volume)
                setVolume('0')
                audioRef.current.volume = 0
            }
        }

        setIsMute(!isMute)
    }

    return (

        <div className="max-w-[600px] w-[400px] flex flex-col items-center bg-gradient-to-t from-violet-900 to-fuchsia-500 rounded-lg drop-shadow-xl hover:drop-shadow-xl">
            <Image
                width={300}
                height={300}
                src="/imagens/audio.gif"
                alt="Gif ilustrativo"
            />
            <div
                {...otherProps}
                className="w-full h-20 flex gap-2 justify-around 
                bg-zinc-200 rounded-b-md dark:bg-zinc-900"
            >
                <div className="flex items-center justify-center gap-6">

                    {
                        isPlaying
                            ? <Pause
                                onClick={playSong}
                                size={32}
                                className="hover:scale-110 cursor-pointer duration-100 text-violet-900 dark:text-zinc-50"
                            />
                            : <Play
                                onClick={playSong}
                                size={32}
                                className="hover:scale-110 cursor-pointer duration-100 text-violet-900 dark:text-zinc-50"
                            />
                    }
                </div>
                <div className="w-1/2 flex gap-4 justify-between items-center">
                    <span className="text-violet-900 dark:text-zinc-50">
                        {
                            currentTime !== null
                                ? formatDuration(currentTime)
                                : '0:00'
                        }
                    </span>

                    <Progress
                        value={progress}
                        max={
                            audioRef.current?.duration !== undefined
                                ? audioRef.current.duration
                                : 0
                        }
                        className="rounded-full w-full h-2 appearance-none"
                    />

                    <span className="text-violet-900 dark:text-zinc-50">
                        {
                            duration !== null
                                ? formatDuration(duration)
                                : '0:00'
                        }
                    </span>
                </div>

                <div className="flex gap-1 justify-center items-center w-1/3">

                    {
                        isMute
                            ? < VolumeX
                                className="hover:scale-110 cursor-pointer duration-100 text-violet-900 dark:text-zinc-50"
                                onClick={activeMute}
                            />
                            : Number(volume) > 40
                                ? <Volume2
                                    className="hover:scale-110 cursor-pointer duration-100 text-violet-900 dark:text-zinc-50"
                                    onClick={activeMute}
                                />
                                : <Volume1
                                    className="hover:scale-110 cursor-pointer duration-100 text-violet-900 dark:text-zinc-50"
                                    onClick={activeMute}
                                />
                    }

                    <input
                        onChange={changeVolume}
                        max={100}
                        min={0}
                        value={volume}
                        type="range"
                        className="rounded-full w-1/2 h-2 appearance-none 
                        outline-none text-violet-900 dark:text-zinc-50"
                    />
                </div>

                {
                    audio !== undefined &&
                    <audio
                        ref={audioRef}
                        src={audio.audioURL}
                    />
                }
            </div>
        </div>
    )
}
