import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "@/components/portfolio-section"
import SpecialProjectsSection from "@/components/special-projects-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Hero/About Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-emerald-500">
            <Image src="https://v0.blob.com/pjtmy8OGJ.png" alt="Mohammed" fill className="object-cover" priority />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
            Mohammed | Video Editor & Motion Designer
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-zinc-300">
            I help brands and creators bring their vision to life through engaging visuals and motion design.
          </p>

          <Link href="#portfolio">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Special Projects Section */}
      <SpecialProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
