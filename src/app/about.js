export default function About() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">About Me</h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          I am currently pursuing a Bachelor&apos;s degree in Computer Science. My primary interests include Web Development, UI/UX Design, and Software Engineering principles.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript","Git", "HTML/CSS", "C++","Python"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Education</h2>
        <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-1">
          <h3 className="font-semibold text-slate-900">B.S. in Computer Science</h3>
          <p className="text-sm text-slate-500">State University • 2022 - Present</p>
          <p className="text-sm text-slate-600 pt-1">
            Relevant Coursework: Data Structures & Algorithms, Web Engineering, Database Systems.
          </p>
        </div>
      </div>
    </section>
  );
}