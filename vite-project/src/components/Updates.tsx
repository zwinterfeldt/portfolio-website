// import React is not needed for JSX in React 17+

const Updates: React.FC = () => {
  return (
    <div className="updates-container" style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{
        fontSize: '3rem',
        marginBottom: '2rem',
        color: '#6c757d'
      }}>
        🚧
      </div>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#495057',
        marginBottom: '1rem',
        fontWeight: '300'
      }}>
        Coming Soon...
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#6c757d',
        maxWidth: '500px',
        lineHeight: '1.6'
      }}>
        This page is under construction. Check back soon!
      </p>
    </div>
  );
};

export default Updates;