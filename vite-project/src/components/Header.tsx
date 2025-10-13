import React from 'react';

const tabs = [
    { label: 'Home', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Updates', href: '#' },
    { label: 'Contact', href: '#' },
];

const Header: React.FC = () => (
    <header style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                {tabs.map(tab => (
                    <li key={tab.label} style={{ marginRight: '2rem' }}>
                        <a
                            href={tab.href}
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                            }}
                        >
                            {tab.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;