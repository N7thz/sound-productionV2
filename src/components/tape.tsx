import { Bolt } from "lucide-react"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

export const Tape = () => {

    const [animation, setAnimation] = useState<string>("")

    const playTape = () => {

        animation === ""
            ? setAnimation("animate-spin")
            : setAnimation("")
    }

    return (

        <div
            onClick={playTape}
            className="w-[350px] min-h-[220px] flex flex-col justify-between items-center bg-zinc-50 text-black rounded-md m-4 relative border border-black drop-shadow-md cursor-pointer hover:drop-shadow-xl"
        >
            <Bolt
                width={10}
                height={10}
                className="absolute top-2 left-2"
            />
            <Bolt
                width={10}
                height={10}
                className="absolute top-2 right-2"
            />
            <Bolt
                width={10}
                height={10}
                className="absolute bottom-2 left-2"
            />
            <Bolt
                width={10}
                height={10}
                className="absolute bottom-2 right-2"
            />
            <div className="w-11/12 min-h-[120px] flex flex-col justify-between items-center mt-8 bg-violet-500 rounded-t-xl overflow-hidden">
                <div className="bg-zinc-300 w-full p-1 text-center text-lg font-bold">
                    #Nome do audio
                </div>
                <div className="w-2/3 min-h-[50px] flex justify-between items-center bg-zinc-50 -translate-y-4 rounded-full">

                    <div
                        className={
                            twMerge(
                                "w-[46px] h-[46px] ml-1 rounded-full bg-zinc-50 border-4 relative",
                                animation
                            )
                        }
                    >
                        <div className="w-2 h-2 bg-black absolute top-[40%] left-0 " />
                        <div className="w-2 h-2 bg-black absolute top-[40%] right-0 " />
                        <div className="w-2 h-2 bg-black absolute top-0 left-[40%] " />
                        <div className="w-2 h-2 bg-black absolute bottom-0 right-[40%] " />
                    </div>
                    <div
                        className={
                            twMerge(
                                "w-[46px] h-[46px] mr-1 rounded-full bg-zinc-50 border-4 relative",
                                animation
                            )
                        }
                    >
                        <div className="w-2 h-2 bg-black absolute top-[40%] left-0 " />
                        <div className="w-2 h-2 bg-black absolute top-[40%] right-0 " />
                        <div className="w-2 h-2 bg-black absolute top-0 left-[40%] " />
                        <div className="w-2 h-2 bg-black absolute bottom-0 right-[40%] " />
                    </div>
                </div>
            </div>
            <span className="w-11/12 min-h-[1px] bg-black" />
            <div className="w-2/3 min-h-[40px] border rounded-t-lg" />
        </div >

    )
}
