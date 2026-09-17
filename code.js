import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const handleConsultation = () => {
    setMessage("Thank you! NBE Consultants will contact you soon.");
  };

  return (
    <div style={styles.page}>

      {/* Navigation */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>NBE CONSULTANTS</h2>

        <div style={styles.navLinks}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Building Ideas Into Reality
          </h1>

          <p style={styles.heroText}>
            Professional construction consulting services
            you can trust.
          </p>

          <button
            type="button"
            onClick={handleConsultation}
            style={styles.button}
          >
            Request a Consultation
          </button>

          {message && (
            <p aria-live="polite" style={styles.message}>{message}</p>
          )}
        </div>
      </section>

      {/* About */}
      <section id="about" style={styles.section}>
        <h2 style={styles.heading}>About NBE Consultants</h2>

        <p style={styles.text}>
          NBE Consultants is a construction consulting company
          dedicated to providing professional advice and
          solutions for construction and development projects.
        </p>

        <p style={styles.text}>
          We help clients plan, manage and successfully
          complete their construction projects.
        </p>
      </section>

      {/* Services */}
      <section id="services" style={styles.services}>
        <h2 style={styles.heading}>Our Services</h2>

        <div style={styles.cards}>

          <div style={styles.card}>
            <h3>🏗️ Construction Consulting</h3>
            <p>
              Professional advice and guidance throughout
              construction projects.
            </p>
          </div>

          <div style={styles.card}>
            <h3>📐 Project Planning</h3>
            <p>
              Helping clients plan construction projects
              efficiently and effectively.
            </p>
          </div>

          <div style={styles.card}>
            <h3>📊 Project Management</h3>
            <p>
              Managing construction activities, schedules
              and resources.
            </p>
          </div>

          <div style={styles.card}>
            <h3>🏢 Building Consultancy</h3>
            <p>
              Professional building and development
              consultancy services.
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>Our Projects</h2>

        <div style={styles.cards}>

          <div style={styles.projectCard}>
            <h3>Residential Buildings</h3>
            <p>
              Consulting services for residential
              construction and development.
            </p>
          </div>

          <div style={styles.projectCard}>
            <h3>Commercial Buildings</h3>
            <p>
              Professional consulting for offices,
              shops and commercial developments.
            </p>
          </div>

          <div style={styles.projectCard}>
            <h3>Infrastructure</h3>
            <p>
              Construction planning and consulting
              for infrastructure projects.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.heading}>Contact Us</h2>

        <p>📍 Kampala, Uganda</p>
        <p>📞 +256 794 111779</p>
        <p>📧 info@nbeconsultants.com</p>

        <button
          type="button"
          onClick={handleConsultation}
          style={styles.button}
        >
          Contact NBE Consultants
        </button>

        {message && (
          <p aria-live="polite" style={styles.message}>{message}</p>
        )}
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <h3>NBE CONSULTANTS</h3>
        <p>Building Ideas Into Reality</p>
        <p>© 2026 NBE Consultants. All Rights Reserved.</p>
      </footer>

    </div>
  );
}


/* Website Styles */

const styles = {
  page: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    backgroundColor: "#17202A",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    margin: 0,
    color: "#F4B400",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },

  hero: {
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heroContent: {
    maxWidth: "750px",
    padding: "30px",
    color: "white",
  },

  heroTitle: {
    fontSize: "55px",
    marginBottom: "20px",
  },

  heroText: {
    fontSize: "21px",
    marginBottom: "30px",
  },

  button: {
    padding: "14px 28px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#F4B400",
    color: "#17202A",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  message: {
    marginTop: "20px",
    fontWeight: "bold",
  },

  section: {
    padding: "80px 10%",
    textAlign: "center",
  },

  services: {
    padding: "80px 10%",
    textAlign: "center",
    backgroundColor: "#F5F5F5",
  },

  heading: {
    fontSize: "35px",
    marginBottom: "30px",
  },

  text: {
    maxWidth: "800px",
    margin: "15px auto",
    lineHeight: "1.7",
    fontSize: "17px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },

  card: {
    width: "220px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  projectCard: {
    width: "250px",
    padding: "30px",
    backgroundColor: "#EEEEEE",
    borderRadius: "8px",
  },

  contact: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "#17202A",
    color: "white",
  },

  footer: {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#0D1117",
    color: "white",
  },
};

export default App;
