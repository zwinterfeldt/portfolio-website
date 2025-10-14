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
                    ⏰
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Timesheet Automation</h5>
                    <p className="card-text">
                      At my on campus job, I worked the same hours every week and had to fill out the same online timesheet every week. 
                      I decided instead of taking 30 minutes a week manually entering it all, I could automate the process. I used Python and Selenium to 
                      create a script that would automatically enter my hours for me!
                    </p>
                    <div className="mb-2">
                      <span className="badge bg-primary me-1">Python</span>
                      <span className="badge bg-secondary me-1">Selenium</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-primary btn-sm">...</button>
                      <a
                        className="btn btn-outline-secondary btn-sm"
                        href="https://github.com/zwinterfeldt/Timesheet-Automation"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
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
                    ⚾
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Major League Baseball Outcome Predictor</h5>
                    <p className="card-text">
                      This project is a work in progress. After conducting a thorough literature review of methods used in attempting to predict the outcomes of MLB games,
                      I have created a parser that scrapes the web for game data and cleans it for use in training machine learning models. I haven't developed the models yet, but stay tuned 😎
                    </p>
                    <div className="mb-2">
                      <span className="badge bg-primary me-1">Python</span>
                      <span className="badge bg-danger me-1">BeautifulSoup</span>
                      <span className="badge bg-warning">pandas</span>
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
                      <h5 className="card-title mb-1">CCSC Programming Competition</h5>
                      <small className="text-muted">September 21, 2024 • 2nd Place</small>
                    </div>
                  </div>
                  <p className="card-text">
                    This undergraduate programming competition took place at Grand Valley State University in Grand Rapids, Michigan. In 4 hours, my team of 3 was the first to finish all 5 of the questions asked. 
                    Due to an extra submission, our time bonus could not bring us to second place. We did, however, take home the 2nd place tropy!
                  </p>
                  <div className="mb-2">
                    <span className="badge bg-warning me-1">4 hours</span>
                    <span className="badge bg-info me-1">Team of 3</span>
                    <span className="badge bg-secondary me-1">7 Teams Total</span>
                    <span className="badge bg-success">2nd Place</span>
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
                      🧮
                    </div>
                    <div>
                      <h5 className="card-title mb-1">Midwest Undergraduate Data Analytics Competition</h5>
                      <small className="text-muted">April 6-7, 2024 • Top 10 Finish</small>
                    </div>
                  </div>
                  <p className="card-text">
                    The Midwest Undergraduate Data Analytics Competition (MUDAC) is a 24-hour data analytics competition that rotates campuses throughout the Midwest. This year's challenge was working with agricultural data to 
                    determine things like where in Minnesota to put new green fertilizer plants among other questions. My team of 4 worked diligently to make connections with the data, find our own additional data sets, plot the data, and come up 
                    with a case for our recommendations. We ended up finishing in the top 10 out of 50 teams in the undergraduate division!
                  </p>
                  <div className="mb-2">
                    <span className="badge bg-primary me-1">Data Analysis</span>
                    <span className="badge bg-warning me-1">Power BI</span>
                    <span className="badge bg-danger">matplotlib</span>
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
                    Worked with various organizations to give back to the community. Some of these organizations include:
                    <ul>
                      <li>Maverick Food Pantry</li>
                        <li>ECHO Food Shelf</li>
                        <li>Feed my Starving Children</li>
                    </ul>

                  </p>
                  <div className="mb-2">
                    <span className="badge bg-info me-1">Community Impact</span>
                    <span className="badge bg-success">60+ Hours</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 style={{ color: '#333', marginBottom: '1rem' }}>📄 Resume</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 2rem' }}>
              View my complete professional background, education, and technical expertise. 
              Download for offline viewing or recruiting purposes.
            </p>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <a
                className="btn btn-primary btn-lg"
                href="/resume.pdf"
                download
                style={{ textDecoration: 'none', padding: '12px 30px' }}
              >
                📥 Download PDF
              </a>
              <a
                className="btn btn-outline-primary btn-lg"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', padding: '12px 30px' }}
              >
                🔗 Open in New Tab
              </a>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{ 
                backgroundColor: '#fff', 
                borderRadius: '12px', 
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                border: '1px solid #e0e0e0'
              }}>
                {/* Preview Header */}
                <div style={{ 
                  backgroundColor: '#6f42c1', 
                  color: 'white', 
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h5 style={{ margin: 0, fontWeight: '500' }}>Resume Preview</h5>
                    <small style={{ opacity: 0.9 }}>Click to interact with the full document</small>
                  </div>
                  <div style={{ fontSize: '1.5rem' }}>📋</div>
                </div>

                {/* PDF Embed */}
                <div style={{ 
                  position: 'relative',
                  width: '100%',
                  height: '600px',
                  backgroundColor: '#f8f9fa'
                }}>
                  <iframe
                    src="/resume.pdf"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: '0 0 12px 12px'
                    }}
                    title="Resume Preview"
                  />
                  
                  {/* Fallback for browsers that don't support PDF embedding */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'none', // Will show if iframe fails
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#f8f9fa',
                    color: '#6c757d'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
                    <h4>PDF Preview Not Available</h4>
                    <p>Your browser doesn't support PDF embedding.</p>
                    <a
                      className="btn btn-primary"
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      View Resume in New Tab
                    </a>
                  </div>
                </div>

                {/* Quick Info Footer */}
                <div style={{ 
                  padding: '1rem 1.5rem',
                  backgroundColor: '#f8f9fa',
                  borderTop: '1px solid #e0e0e0'
                }}>
                  <div className="row text-center">
                    <div className="col-md-4">
                      <small style={{ color: '#6c757d' }}>
                        <strong>Updated:</strong> October 2025
                      </small>
                    </div>
                    <div className="col-md-4">
                      <small style={{ color: '#6c757d' }}>
                        <strong>Format:</strong> PDF Document
                      </small>
                    </div>
                    <div className="col-md-4">
                      <small style={{ color: '#6c757d' }}>
                        <strong>Size:</strong> ~1-2 pages
                      </small>
                    </div>
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
