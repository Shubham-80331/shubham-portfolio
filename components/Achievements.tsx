export default function Achievements() {
  const achievements = [
    "Solved 200+ algorithmic problems on Codeforces",
    "Codeforces Rating: 1186",
    "Regular competitive programming participant",
  ];

  return (
    <section id="achievements" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Achievements</h2>

      <ul className="space-y-3">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
