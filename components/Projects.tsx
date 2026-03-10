export default function Projects() {
  const projects = [
    {
      title: "Soil Mate",
      desc: "ML based soil fertility prediction system with crop recommendation.",
      tech: "Python, Flask, React, Tailwind",
    },
    {
      title: "LinkedIn Post Generator",
      desc: "RAG based AI system generating structured LinkedIn posts.",
      tech: "LangChain, FastAPI, Docker",
    },
    {
      title: "Yantr Gen",
      desc: "Astronomical instrument calculator with 3D visualization.",
      tech: "React, Three.js",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{p.title}</h3>

            <p className="text-gray-600 mt-2">{p.desc}</p>

            <p className="text-sm mt-3">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
