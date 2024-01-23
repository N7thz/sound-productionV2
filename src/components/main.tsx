import { GradientLine } from "./gradient-line"
import audiosJson from "@/audios.json"
import { Audio } from "@/types"
import { PlayerAudio } from "./playerAudio"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"
import Image from "next/image"

export const Main = () => {

    const audios: Audio[] = audiosJson.audios

    return (

        <main className="w-full py-8">
            <div
                className="w-2/3 flex bg-zinc-200 rounded-md m-auto overflow-hidden 
                drop-shadow-md hover:drop-shadow-xl dark:bg-zinc-900"
            >
                <Image
                    width={200}
                    height={200}
                    src="/imagens/home-image.png"
                    alt="imagem de home"
                    className="w-[200px] h-[200px]"
                />
                <div>
                    <p className="p-2">
                        Descubra a magia sonora da nossa rádio indoor! Criamos uma experiência
                        única, personalizada para cada ambiente. Música envolvente, comerciais
                        cativantes e uma atmosfera especial. Sintonize-se na nossa frequência
                        exclusiva e transforme o som do seu espaço!
                    </p>
                </div>
            </div>
            <h2 className="text-3xl p-4 pl-12 mt-12">Alguns exemplos de audios indor</h2>
            <GradientLine />
            <div className="w-full flex flex-col justify-center items-center">
                <Carousel className="w-1/3 mt-10">
                    <CarouselPrevious
                        className="text-violet-900 dark:text-zinc-50"
                    />
                    <CarouselContent>
                        {
                            audios.map(audio =>

                                <CarouselItem
                                    key={audio.id}
                                    className="w-full flex justify-center items-center "
                                >
                                    <PlayerAudio />
                                </CarouselItem>
                            )
                        }
                    </CarouselContent>
                    <CarouselNext
                        className="text-violet-900 dark:text-zinc-50"
                    />
                </Carousel>
            </div>
        </main>
    )
}
