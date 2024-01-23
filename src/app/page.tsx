import { Footer } from "@/components/footer";
import { GradientLine } from "@/components/gradient-line";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

export default function Home() {

  return (
    
    <>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
        <Header />
        <GradientLine />
        <Main />
      </div>
      <Footer />
    </>
  )
}
