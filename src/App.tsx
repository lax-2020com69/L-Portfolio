import { useEffect, useState } from "react";

const App = () => {
  const [showTop, setShowTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll To Top Button */}
      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}

      {/* HERO */}
      <header className="hero">
        <nav className="navbar">
          <h2 className="logo">
            <a href="#">L</a>
          </h2>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1>
            Hi, I'm <span>Laxman</span>
          </h1>
          <p>Full Stack Developer | Python | JavaScript</p>
          <a href="github-address" className="btn">
            View Projects
          </a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m a passionate Full Stack Developer specializing in modern,
          scalable web applications with clean UI and optimized backend systems.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section bg-light">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "Python","HTML5","CSS3","JavaScript","SQL","PHP",
            "REST APIs","Git & GitHub","React","Java","C++","VS Code"
          ].map(skill => (
            <div key={skill} className="skill">{skill}</div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {[
            ["ATM Card","Simple ATM card with HTML5 and CSS3."],
            ["Tamil Keyboard","Using HTML5, CSS3 & JS"],
            ["AC/DC Clock","Simple HTML5, CSS3 and JS."],
            ["Game 25","Python CLI game"],
            ["🥁 Drum Kit","HTML5, CSS3 & JS"],
            ["Pikachu","HTML5 & CSS3"],
            ["Todo App","React hooks todo app"],
            ["Weather Dashboard","OpenWeather API + React"],
            ["VS Code Clone","HTML, CSS & JS"],
            ["AgribotV1.0","Simple Agribot"],
            ["Airline Reservation System","C++"],
            ["Trainee-CRUD","React + Vite + Java"]
          ].map(([title, desc]) => (
            <div key={title} className="project-card">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-dark">
        <h2>Contact</h2>
        <p>Email: laxmanlax6400@gmail.com</p>
        <p>GitHub: github.com/lax-2020com69</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Laxman. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
