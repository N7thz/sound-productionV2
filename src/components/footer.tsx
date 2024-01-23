import { Facebook, Instagram, Phone } from "lucide-react"

export const Footer = () => {

    return (

        <div className="w-full min-h-[150px] bg-zinc-200 dark:bg-zinc-900 border-t-2 border-violet-500">
            <div>
                <Facebook />
                <Instagram />

                <h2>Informações de contato:</h2>
                <ul>
                    <li>
                        emial@gmail.com
                    </li>

                    <li>
                        <Phone />
                        (21)1234-56789
                    </li>
                </ul>
            </div>
        </div>
    )
}
