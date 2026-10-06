export default function Home() {
  return (
    <section>
      <div className="hero-card hero-layout">
        <div className="profile-image-box">
          <img
            src="/profile.jpg"
            alt="K Shreevathsa"
            className="profile-image"
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Hi, I&apos;m K SHREEVATHSA </h1>
          <p className="hero-text">
            Computer Science Student & aspiring Full-Stack Developer. Passionate about building modern, user-friendly web applications.
          </p>
        </div>
      </div>

      <div>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>EV Charging Station Finder</h3>
          </div>

          <div className="project-card">
            <h3>Student Management Portal</h3>
          </div>

          <div className="project-card">
            <h3>Cozmoclench Bot</h3>
          </div>
        </div>
      </div>
    </section>
  );
}