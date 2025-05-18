import { Instagram, Facebook, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
              Mohammed
            </h3>
            <p className="text-zinc-400 mt-1">Video Editor & Motion Designer</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="https://www.instagram.com/mohamed.produced/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </Link>

            <Link
              href="https://www.facebook.com/mohamed.produced"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span>Facebook</span>
            </Link>

            <Link
              href="https://wa.me/963936002056"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          &copy; 2025 Mohammed Produced. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
