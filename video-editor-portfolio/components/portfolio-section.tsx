import VideoCard from "./video-card"

export default function PortfolioSection() {
  // Portfolio projects from Google Drive
  const portfolioProjects = [
    {
      id: 1,
      title: "Motion Graphics Reel",
      description: "A showcase of motion graphics work for various clients",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/video-thumbnail-1.png",
    },
    {
      id: 2,
      title: "Brand Commercial",
      description: "30-second commercial for a tech company",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/video-thumbnail-2.png",
    },
    {
      id: 3,
      title: "Product Animation",
      description: "3D product animation with dynamic transitions",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/video-thumbnail-3.png",
    },
    {
      id: 4,
      title: "Social Media Ad",
      description: "Engaging short-form content for Instagram",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/video-thumbnail-4.png",
    },
    {
      id: 5,
      title: "Corporate Explainer",
      description: "Animated explainer video with voiceover",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/video-thumbnail-5.png",
    },
    {
      id: 6,
      title: "Event Promo",
      description: "Promotional video for a major event",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/video-thumbnail-6.png",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <VideoCard
              key={project.id}
              title={project.title}
              description={project.description}
              videoUrl={project.videoUrl}
              thumbnail={project.thumbnail}
              projectId={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
