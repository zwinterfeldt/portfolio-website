import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem', 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/mpls_skyline.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 15%',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        marginBottom: '3rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          Welcome to My Wesbite!
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          I am a passionate software engineer inspired by innovation and creativity based out of Minneapolis, Minnesota.
          I love to connect and collaborate with others to help bring ideas to life!
        </p>
        <button 
          className="btn btn-primary btn-lg"
          style={{ padding: '12px 30px', fontSize: '1.1rem' }}
          onClick={() => navigate('/portfolio')}
        >
          View My Work
        </button>
      </section>

      {/* About Section */}
      <section className="about-section" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>About Me</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                I'm a dedicated developer with a passion for creating innovative solutions. 
                I love solving all kinds of problems and making my life and others' easier through code!
                I'm very interested in machine learning, deep learning, automation, and full stack development.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                I hold a Bachelor's in Science in Computer Science from Minnesota State University, Mankato where I minored in Mathematics.
                Although I'm just getting started in my career, I've had the opportunity to work on numerous industry projects and internships that gave me a wealth of experience.
                </p>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>🌐 Languages:</strong> Python, Java, TypeScript, HTML/CSS, SQL (Postgres), HTML/CSS, MongoDB Query Language
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>🖼️ Frameworks:</strong> React, Node.js, Flask
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>🛠️ Dev tools:</strong> Git, Docker, WSL, AWS, Google Cloud Platform, Render, VS Code, WebStorm, Jupyter Notebooks
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>📚 Libraries:</strong> pandas, NumPy, scikit-learn, Matplotlib, SQLAlchemy, MediaPipe, XState
                </li>
              </ul>
            </div>
            <div className="col-md-6" style={{ textAlign: 'center' }}>
              <img 
                src="/profile.jpg" 
                alt="My professional headshot" 
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #fff',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  margin: '0 auto',
                  display: 'block'
                }}
              />
              <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
               My Headshot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links" style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '3rem 2rem', 
        textAlign: 'center' 
      }}>
        <h2 style={{ marginBottom: '2rem', color: '#333' }}>Explore My Work</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={{ border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <div className="card-body">
                <h5 className="card-title">🛠️ Projects</h5>
                <p className="card-text">
                  Check out my latest web applications and development projects.
                </p>
                <button className="btn btn-outline-primary" onClick={() => navigate('/portfolio')}>View Portfolio</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={{ border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <div className="card-body">
                <h5 className="card-title">📝 Updates</h5>
                <p className="card-text">
                  Read about my latest learning journey and project updates.
                </p>
                <button className="btn btn-outline-primary">Read Updates</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={{ border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <div className="card-body">
                <h5 className="card-title">💬 Contact</h5>
                <p className="card-text">
                  Let's connect! I'm always open to new opportunities.
                </p>
                <button className="btn btn-outline-primary">Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
