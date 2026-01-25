import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState<'Get involved' | 'Donate'>('Get involved');

  const handleAction = () => {
    if (option === 'Get involved') {
      navigate('/contact'); // replace with the route or modal you want
    } else {
      // navigate('/donate'); // if you have a donate route
      window.open('https://your-donation-page.example', '_blank'); // or external link
    }
  };

  // card definitions for each slider state
  const defaultCards = [
    {
      title: 'Join an ICE watch',
      text: 'Join an ICE watch, rapid response team, community defense, school protection, and more.',
      buttonText: 'Defend 612',
      image: '/whistle_blow.jpg',
      onClick: () => window.open('https://defend612.com/', '_blank'),
      extraButtons: [
        { text: 'Monarca (Rapid Response Tip Line and Training)', onClick: () => window.open('https://monarcamn.org/training', '_blank') },
      ]
    },
    {
      title: 'Distribute food/Help Transport',
      text: 'Help deliver food to those unable to leave their homes or assist with transportation for those unable to reliably access it.',
      buttonText: 'Alight',
      image: '/city_car_winter.jpg',
      onClick: () => window.open('https://www.wearealight.org/stories/supporting-our-minnesota-community', '_blank'),
      extraButtons: [
        { text: 'Community Aid Network MN', onClick: () => window.open('https://www.canmn.org/volunteer', '_blank') },
      ]
    },
    {
      title: 'Legal Services',
      text: "Legal services, resettlement assistance, employment support and other volunteer opportunities.",
      buttonText: 'International Institute of Minnesota',
      image: '/legal2.jpg',
      onClick: () => window.open('https://iimn.org/volunteer/', '_blank'),
    }
  ];

  const donateCards = [
    {
      title: 'Immigrant Defense Project',
      text: 'Donate to the immigrant defense project to help stand up for the rights of all immigrants.',
      buttonText: 'Donate Now',
      image: '/legal.jpg',
      onClick: () => window.open('https://www.immigrantdefenseproject.org/donate/', '_blank'),
    },
    {
      title: 'Organizations that Need Your Support',
      text: 'Other organizations that are fighting for the civil liberties of all.',
      buttonText: 'American Civil Liberties Union',
      image: '/lady_liberty.jpg',
      onClick: () => window.open('https://www.aclu.org/press-releases/aclu-and-aclu-of-minnesota-demand-immediate-action-after-federal-agents-kill-another-person', '_blank'),
      extraButtons: [
        { text: 'ICE Out of MN', onClick: () => window.open('https://www.https://www.iceoutnowmn.com/', '_blank') }
      ]
    },
    {
      title: 'Donate Food and Other Resources',
      text: 'Donate shelf-stable food, baby formula, menstrual products and more to community donation centers below.',
      buttonText: 'Metta Coffee',
      image: '/food-drive.jpg',
      onClick: () => window.open('https://www.mettacoffee.com/', '_blank'),
      extraButtons: [
        { text: 'Parents for Good', onClick: () => window.open('https://www.facebook.com/parentsforgood/', '_blank') }
      ]
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem', 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/IMG_2067.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 72%',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        marginBottom: 0
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          How can I help?
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Do you want to stand up for your immigrant neighbors but don't really know where to start?
          Click on the cards below to see ways you can do your part in standing up to ICE and getting them <u><i>out</i></u> of our communities!<br/><br/>

          First, I'd like to highlight some very important organizations that have many helpful and important resources:<br/><br/>

          <a href="https://mnnoice.com/index.html#overview" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>MN NOICE</a><br/>
          <a href="https://monarcamn.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>Monarca</a>
        </p>
        {/* Toggle and Action Button */}
        <h2 style={{ marginBottom: '1.5rem', color: '#d6d6d6' }}><b>Get Involved or Donate</b></h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div
            role="switch"
            aria-checked={option === 'Donate'}
            onClick={() => setOption(prev => (prev === 'Get involved' ? 'Donate' : 'Get involved'))}
            style={{
              cursor: 'pointer',
              width: 200,
              height: 44,
              borderRadius: 999,
              background: '#4a4a4a',
              padding: 4,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: option === 'Get involved' ? '4px' : 'calc(50% + 4px)',
                top: '3px',
                width: 'calc(50% - 4px)',
                height: '38px',
                borderRadius: 999,
                background: '#ff7de5',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'left 180ms ease',
                fontWeight: 600,
                zIndex: 1,
                boxSizing: 'border-box'
              }}
              aria-hidden="true"
            />
            {/* labels to make the clickable areas clear */}
            <div style={{ width: '50%', textAlign: 'center', position: 'relative', zIndex: 2, color: option === 'Get involved' ? '#495057' : '#ffffff' }}>Get involved</div>
            <div style={{ width: '50%', textAlign: 'center', position: 'relative', zIndex: 2, color: option === 'Donate' ? '#495057' : '#ffffff' }}>Donate</div>
          </div>
        </div>
        </section>

      {/* Quick Links Section */}
      <section className="quick-links" style={{
        backgroundColor: '#2b2b2b', // dark grey
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '2rem', color: '#d6d6d6' }}>{option === 'Get involved' ? 'Ways you can help' : 'Donate & Support'}</h2>
        <div className="row">
          {(option === 'Get involved' ? defaultCards : donateCards).map((c, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <div className="card h-100" style={{ border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', background: '#333' }}>
                {/* image banner */}
                {c.image && (
                  <div style={{
                    height: 140,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.24)), url(${c.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopLeftRadius: '0.25rem',
                    borderTopRightRadius: '0.25rem'
                  }} />
                )}
                <div className="card-body" style={{ color: '#fff' }}>
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text">{c.text}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.6rem' }}>
                    {([ { text: c.buttonText, onClick: c.onClick } ].concat(c.extraButtons || [])).map((b: any, i: number) => (
                      <button
                        key={i}
                        onClick={b.onClick}
                        style={{
                          background: '#ff7de5',
                          color: '#333',
                          border: 'none',
                          padding: '10px 12px',
                          fontSize: '1rem',
                          borderRadius: 6,
                          width: '100%',
                          textAlign: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        {b.text}
                      </button>
                    ))}
                  </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
