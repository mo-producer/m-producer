"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface VideoCardProps {
  title: string
  description: string
  videoUrl: string
  thumbnail: string
  projectId: number
}

export default function VideoCard({ title, description, videoUrl, thumbnail, projectId }: VideoCardProps) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-emerald-500/20">
      <div className="relative aspect-video">
        {showVideo ? (
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <Image
              src={thumbnail || "/placeholder.svg?height=720&width=1280"}
              alt={title}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <div className="bg-emerald-600 rounded-full p-3 transition-transform duration-300 hover:scale-110">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>

        <Link href={`/order?project=${projectId}`}>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Order Now</Button>
        </Link>
      </div>
    </div>
  )
}
