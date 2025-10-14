import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      {/* Portfolio Header */}
      <section style={{ 
        padding: '4rem 2rem 2rem', 
        textAlign: 'center',
        backgroundColor: '#f8f9fa' 
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          My Portfolio
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Explore my journey through various projects, competitions, and experiences that have shaped 
          my development as a software engineer.
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>Projects</h2>
          
          {/* Industry-Sponsored Projects */}
          <div className="mb-5">
            <h3 style={{ 
              color: '#495057', 
              marginBottom: '2rem', 
              paddingBottom: '0.5rem', 
              borderBottom: '2px solid #007bff' 
            }}>
              🏢 Industry-Sponsored Projects
            </h3>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #007bff' }}>
                  <div style={{
                    height: '200px',
                    backgroundColor: '#e7f3ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: '#007bff'
                  }}>
                    🧠
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Continuous Authentication with Behavioral Biometrics Research Project</h5>
                    <p className="card-text">
                        In this research project, my team and I performed a literature review on continuous authentication methods currently being tested in use. 
                        This gave us a good starting point to collect our own data, clean the dataset and develop implementations of three machine learning models to classify users based on their behavioral biometrics. 
                        We achieved high accuracy with our models, published a research paper in the International Journal of Computer Science and Information Technology, and presented at 
                        the Minnesota State Mankato Research Symposium where we achieved a 1st place award for poster presentations in our session.
                    </p>
                    <div className="mb-2">
                      <span className="badge bg-primary me-1">Python</span>
                      <span className="badge bg-warning me-1">scikit-learn</span>
                    </div>
                    <div className="d-flex gap-2">
                      <a className="btn btn-outline-primary btn-sm"
                        href="https://github.com/AuthenTech2023/authentech-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        GitHub Repository
                      </a>
                      <a
                        className="btn btn-outline-success btn-sm"
                        href="https://airccse.org/journal/ijcsit_forthcoming.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link to Published Paper
                      </a>
                      <a
                        className="btn btn-outline-secondary btn-sm"
                        href="/16124ijcsit05.pdf"
                        download
                      >
                        Download Paper
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #007bff' }}>
                  <div style={{
                    height: '200px',
                    backgroundColor: '#e7f3ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: '#007bff'
                  }}>
                    🏥
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Mayo Hospital Transitional Care Unit Need Predictor</h5>
                    <p className="card-text">
                      Used patient data to develop, train, and test a model to determine the likelihood of a patient needing admission to the Transitional Care Unit (TCU) upon arrival at the hospital.
                      Model achieved incredibly high accuracy and precision, helping the hospital better allocate resources and improve patient care. An accessible and easy to use user interface was also developed to ensure charge nurses
                    could quickly and effectively use the tool during their fast-paced workday.
                    </p>
                    <p>
                        <em>
                            Project is under NDA, so I am unable to share the code or any additional details about the data publicly.
                        </em>
                    </p>
                    <div className="mb-2">
                      <span className="badge bg-primary me-1">Python</span>
                    <span className="badge bg-success me-1" style={{ backgroundColor: '#90ee90', color: '#fff' }}>Pickle</span>
                      <span className="badge bg-info me-1">React</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-secondary btn-sm">...</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #007bff' }}>
                  <div style={{
                    height: '200px',
                    backgroundColor: '#e7f3ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: '#007bff'
                  }}>
                    ⚽
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Wiz Recruit Email Parser and Dashboard</h5>
                    <p className="card-text">
                      Worked directly with a Minnesota State University Women's soccer coach to create a new tool to streamline recruiting and ensure that no potential recruits are missed. 
                      The tool my team developed automatically parsed emails from a prospective recruit who is interested in playing soccer and MSU Mankato. Then key information was extracted and 
                      sent to our Postgres cloud hosted database, where it is then displayed in an easy to use dashboard for the coach to view and manage potential recruits.
                    </p>
                    <div className="mb-2">
                      <span className="badge bg-primary me-1">Python</span>
                      <span className="badge bg-danger me-1">Flask</span>
                      <span className="badge bg-info me-1">React</span>
                      <span className="badge bg-secondary me-1">Postgres</span>
                      <span className="badge bg-primary me-1">AWS RDS</span>
                      <span className="badge bg-warning me-1">AWS Lambda</span>
                    </div>
                    <div className="d-flex gap-2">
                      <a href="https://www.loom.com/share/1be9f9a8d6c742d28d05a9446c1d5740?sid=18228db3-766b-458e-94fd-d1d2841b3c56"
                         className="btn btn-outline-primary btn-sm"
                         target="_blank"
                         rel="noopener noreferrer"
                         >
                            View Demo
                      </a>
                      <button className="btn btn-outline-secondary btn-sm">...</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #007bff' }}>
                  <div style={{
                    height: '200px',
                    backgroundColor: '#e7f3ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: '#007bff'
                  }}>
                    💼
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">The Hidden Village Online</h5>
                    <p className="card-text">
                      A project my team took over from multiple previous semesters of work. The Hidden Village Online uses embodied learning to teach its target users (children)
                      about geometry concepts through an interactive game. They make poses to match the poses on the screen while answering questions to reinforce their learning.
                      Our large deliverables for improving this project were:
                      <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                        <div style={{ marginBottom: '0.5rem' }}>
                          <strong>1.</strong> Create a level editor so that users could create their own levels and games with a custom narrative and poses.
                        </div>
                        <div>
                          <strong>2.</strong> Create a video recording overlay feature for educators to use to pick up on body language and engagement of their students while using the application.
                        </div>
                      </div>
                    </p>
                    <div className="mb-2">
                    <span className="badge bg-success me-1">Node js</span>
                    <span className="badge me-1" style={{ backgroundColor: '#ff69b4', color: '#fff' }}>React PIXI</span>
                      <span className="badge bg-danger me-1">Firebase</span>
                      <span className="badge bg-dark me-1">XState</span>
                    <span className="badge me-1" style={{ backgroundColor: '#20c997', color: '#fff' }}>Mediapipe</span>
                    </div>
                    <div className="d-flex gap-2">
                    <a
                        href="https://www.loom.com/share/02a91853142241eda5e26438f84bf7d3?sid=f4b6c8a1-d955-49ed-b25b-fbeb1efc64eb"
                        className="btn btn-outline-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Demo
                    </a>
                      <button className="btn btn-outline-secondary btn-sm">...</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Projects */}
          <div className="mb-5">
            <h3 style={{ 
              color: '#495057', 
              marginBottom: '2rem', 
              paddingBottom: '0.5rem', 
              borderBottom: '2px solid #28a745' 
            }}>
              💡 Personal Projects
            </h3>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #28a745' }}>
                  <div style={{
                    height: '200px',
                    backgroundColor: '#e8f5e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: '#28a745'
                  }}>
                    🚀
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Personal Project 1</h5>
                    <p className="card-text">
                      A passion project you built in your free time. What inspired you to create this? 
                      What challenges did you overcome?
                    </p>
                    <div className="mb-2">
                      <span className="badge bg-primary me-1">React</span>
                      <span className="badge bg-secondary me-1">TypeScript</span>
                      <span className="badge bg-success">Vite</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-primary btn-sm">View Demo</button>
                      <button className="btn btn-outline-secondary btn-sm">GitHub</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #28a745' }}>
                  <div style={{
                    height: '200px',
                    backgroundColor: '#e8f5e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: '#28a745'
                  }}>
                    🛠️
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Personal Project 2</h5>
                    <p className="card-text">
                      Another personal creation. What problem in your daily life did this solve? 
                      How did it help you learn new technologies?
                    </p>
                    <div className="mb-2">
                      <span className="badge bg-danger me-1">Python</span>
                      <span className="badge bg-warning me-1">FastAPI</span>
                      <span className="badge bg-info">SQLite</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-primary btn-sm">View Demo</button>
                      <button className="btn btn-outline-secondary btn-sm">GitHub</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #28a745' }}>
                  <div style={{
                    height: '200px',
                    backgroundColor: '#e8f5e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: '#28a745'
                  }}>
                    🎯
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Personal Project 3</h5>
                    <p className="card-text">
                      Your latest personal project. What new skills are you exploring? 
                      What's your favorite feature that you implemented?
                    </p>
                    <div className="mb-2">
                      <span className="badge bg-primary me-1">JavaScript</span>
                      <span className="badge bg-secondary me-1">Express</span>
                      <span className="badge bg-success">MongoDB</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-primary btn-sm">View Demo</button>
                      <button className="btn btn-outline-secondary btn-sm">GitHub</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions & Extra-curriculars */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 2rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            🏆 Competitions & Extra-curriculars
          </h2>
          
          <div className="row">
            {/* Competition/Activity 1 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #ffc107' }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      fontSize: '2.5rem',
                      marginRight: '1rem',
                      color: '#ffc107'
                    }}>
                      🥇
                    </div>
                    <div>
                      <h5 className="card-title mb-1">Hackathon/Competition Name</h5>
                      <small className="text-muted">Date • Placement/Achievement</small>
                    </div>
                  </div>
                  <p className="card-text">
                    Description of the competition or hackathon. What was the challenge? 
                    What did you build? What did you learn from the experience?
                  </p>
                  <div className="mb-2">
                    <span className="badge bg-warning me-1">24 hours</span>
                    <span className="badge bg-info me-1">Team of 4</span>
                    <span className="badge bg-success">1st Place</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Competition/Activity 2 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #dc3545' }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      fontSize: '2.5rem',
                      marginRight: '1rem',
                      color: '#dc3545'
                    }}>
                      👥
                    </div>
                    <div>
                      <h5 className="card-title mb-1">Student Organization/Club</h5>
                      <small className="text-muted">Role • Duration</small>
                    </div>
                  </div>
                  <p className="card-text">
                    Your involvement in student organizations. What leadership roles have you taken? 
                    What events or projects did you organize or contribute to?
                  </p>
                  <div className="mb-2">
                    <span className="badge bg-danger me-1">Leadership</span>
                    <span className="badge bg-secondary me-1">Event Planning</span>
                    <span className="badge bg-primary">Mentoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Competition/Activity 3 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #6f42c1' }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      fontSize: '2.5rem',
                      marginRight: '1rem',
                      color: '#6f42c1'
                    }}>
                      🎓
                    </div>
                    <div>
                      <h5 className="card-title mb-1">Academic Competition</h5>
                      <small className="text-muted">Subject Area • Achievement</small>
                    </div>
                  </div>
                  <p className="card-text">
                    Academic competitions, coding contests, or research projects. 
                    What skills did you develop? How did it challenge you?
                  </p>
                  <div className="mb-2">
                    <span className="badge bg-purple me-1">Problem Solving</span>
                    <span className="badge bg-info me-1">Algorithms</span>
                    <span className="badge bg-success">Top 10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Competition/Activity 4 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #20c997' }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      fontSize: '2.5rem',
                      marginRight: '1rem',
                      color: '#20c997'
                    }}>
                      🌟
                    </div>
                    <div>
                      <h5 className="card-title mb-1">Volunteer Work/Community Service</h5>
                      <small className="text-muted">Organization • Impact</small>
                    </div>
                  </div>
                  <p className="card-text">
                    Community involvement and volunteer work. How have you used your tech skills 
                    to help others? What causes are you passionate about?
                  </p>
                  <div className="mb-2">
                    <span className="badge bg-teal me-1">Community Impact</span>
                    <span className="badge bg-info me-1">Tech for Good</span>
                    <span className="badge bg-success">50+ Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '3rem', color: '#333' }}>Technical Skills</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', height: '100%' }}>
                <h5 style={{ color: '#007bff', marginBottom: '1rem' }}>Frontend</h5>
                <p>React, TypeScript, HTML5, CSS3, Bootstrap, Responsive Design</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', height: '100%' }}>
                <h5 style={{ color: '#28a745', marginBottom: '1rem' }}>Backend</h5>
                <p>Node.js, Python, REST APIs, Database Design, Express</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', height: '100%' }}>
                <h5 style={{ color: '#ffc107', marginBottom: '1rem' }}>Data & ML</h5>
                <p>Machine Learning, Deep Learning, Data Analysis, Python Libraries</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', height: '100%' }}>
                <h5 style={{ color: '#dc3545', marginBottom: '1rem' }}>Tools</h5>
                <p>Git, Docker, VS Code, Terminal, Vite, Webpack</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
