import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
    { label: 'Home', path: '/' },
    { label: 'Updates', path: '/updates' },
];

const Header: React.FC = () => (
    <header style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                {tabs.map(tab => (
                    <li key={tab.label} style={{ marginRight: '2rem' }}>
                        <Link
                            to={tab.path}
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                            }}
                        >
                            {tab.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;