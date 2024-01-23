import { ModeToggle } from "./mode-toggle"

export const Header = () => {

    return (

        <header className="flex justify-between items-center pr-4">
            <h1 className="text-6xl p-4">Sound Production</h1>
            <ModeToggle />
        </header>
    )
}
