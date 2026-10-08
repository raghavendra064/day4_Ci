import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>🚀 DevOps Dashboard</h1>
          <p>React application for CI/CD practice</p>
        </div>

        <span className="status">
          ● Online
        </span>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to my CI/CD project</h2>
          <p>
            This React application is automatically built, tested, Dockerized,
            and deployed using a CI/CD pipeline.
          </p>

          <button onClick={() => alert("CI/CD is working! 🚀")}>
            Test Application
          </button>
        </section>

        <section className="cards">
          <div className="card">
            <div className="icon">⚛️</div>
            <h3>Frontend</h3>
            <p>React application</p>
            <span className="badge green">Running</span>
          </div>

          <div className="card">
            <div className="icon">🐳</div>
            <h3>Docker</h3>
            <p>Containerized application</p>
            <span className="badge blue">Ready</span>
          </div>

          <div className="card">
            <div className="icon">🔄</div>
            <h3>CI/CD</h3>
            <p>Automated deployment</p>
            <span className="badge purple">Active</span>
          </div>
        </section>

        <section className="pipeline">
          <h2>Deployment Pipeline</h2>

          <div className="steps">
            <div className="step">
              <span>1</span>
              <strong>Git Push</strong>
              <small>Source code</small>
            </div>

            <div className="arrow">→</div>

            <div className="step">
              <span>2</span>
              <strong>Build</strong>
              <small>npm run build</small>
            </div>

            <div className="arrow">→</div>

            <div className="step">
              <span>3</span>
              <strong>Docker</strong>
              <small>Build image</small>
            </div>

            <div className="arrow">→</div>

            <div className="step">
              <span>4</span>
              <strong>Deploy</strong>
              <small>AWS EC2</small>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>React + Docker + CI/CD + AWS EC2</p>
      </footer>
    </div>
  );
}

export default App;