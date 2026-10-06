export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="info-card">
        <p className="eyebrow">About</p>
        <h1>About Me</h1>
        <p>
          I am currently pursuing a Bachelor&apos;s degree in Computer Science. My primary interests include Web Development, UI/UX Design, and Software Engineering principles.
        </p>
      </div>

      <div className="info-card">
        <h2>Technical Skills</h2>
        <div className="skill-list">
          {['JavaScript', 'Git', 'HTML/CSS', 'C++', 'Python'].map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="info-card">
        <h2>Education</h2>
        <h3>B.E. in Computer Science</h3>
        <p>Sahyadri College of Engineering And Management • 2025 - Present</p>
        <p>Relevant Coursework: Data Structures & Algorithms, Web Development.</p>
      </div>
    </section>
  );
}
