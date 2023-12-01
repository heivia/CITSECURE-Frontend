import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SearchBar } from './SearchBar'; // Update the path accordingly
import Carousel from 'react-bootstrap/Carousel';

const Building = () => {
  const [activeLink, setActiveLink] = useState('building');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const navBarStyles = {
    backgroundColor: 'maroon',
    width: '100%',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const searchBarContainerStyles = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    width: '60%', // Adjust as needed
    textAlign: 'center',
  };

  const navLinkStyles = {
    color: 'white',
    margin: '0 80px',
    position: 'relative',
  };

  const navLinks = [
    { label: 'Home', href: '/menu', id: 'home' },
    { label: 'View Map', href: '/view-map', id: 'view-map' },
    { label: 'Building', href: '/building', id: 'building' },
  ];

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div style={pageStyles}>
      {/* Navigation Bar */}
      <div style={navBarStyles}>
        <div
          style={{
            color: 'white',
            marginLeft: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => {
            setActiveLink('home');
            navigate('/menu');
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 56 54" fill="none">
            <path
              d="M2.91855 24.6698L53.7146 2.74497L28.2999 51.8879L23.7747 30.6645L2.91855 24.6698Z"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ width: '1px', height: '35px', backgroundColor: 'white', margin: '0 5px' }}></span>
          <span>CIT NaviGO</span>
        </div>
        <div>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              style={{
                ...navLinkStyles,
                color: activeLink === link.id ? 'white' : 'white',
              }}
              onClick={() => setActiveLink(link.id)}
            >
              {link.label}
              <div
                style={{
                  content: '""',
                  height: '2px',
                  width: '100%',
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  display: activeLink === link.id ? 'block' : 'none',
                  transition: '0.3s',
                }}
              ></div>
            </Link>
          ))}
        </div>
      </div>

      {/* SearchBar Container */}
      <div style={searchBarContainerStyles}>
        <SearchBar setResults={handleSearchResults} placeholderText="Search Course" />
      </div>

      {/* Your Carousel and content */}
      {/* ... */}

      {/* Display search results */}
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Building;
