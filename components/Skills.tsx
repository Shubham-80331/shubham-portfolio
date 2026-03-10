export default function Skills() {
  const skills = [
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="border px-4 py-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
