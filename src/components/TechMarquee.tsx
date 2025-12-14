const TECH_STACK = [
  "Python",
  "ROS2",
  "C++",
  "Numpy",
  "Pandas",
  "PyTorch",
  "Git",
  "Ansys",
  "Solidworks",
  "Photoshop",
  "Figma",
  "Lightroom",
];

export function TechMarquee() {
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-12 overflow-hidden border-y border-border/50">
      <div className="flex animate-marquee">
        {duplicatedTech.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex-shrink-0 mx-4 px-6 py-3 rounded-full bg-secondary text-foreground font-medium text-sm"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
