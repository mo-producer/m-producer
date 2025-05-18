import SpecialProjectCard from "./special-project-card"

export default function SpecialProjectsSection() {
  // Special projects (premium work)
  const specialProjects = [
    {
      id: 101,
      title: "Cinematic Brand Story",
      description: "A cinematic brand story with advanced color grading and visual effects",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/special-project-1.png",
    },
    {
      id: 102,
      title: "3D Product Animation",
      description: "Complete 3D product animation with photorealistic rendering",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/special-project-2.png",
    },
    {
      id: 103,
      title: "Motion Graphics Package",
      description: "Complete motion graphics package for broadcast television",
      videoUrl: "https://drive.google.com/file/d/1Jf5nUJIkf-z67Zb_LV9ZqRlNa7fYfzgY/preview",
      thumbnail: "/images/special-project-3.png",
    },
  ]

  return (
    <section id="special-projects" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
            Special Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialProjects.map((project) => (
            <SpecialProjectCard
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
