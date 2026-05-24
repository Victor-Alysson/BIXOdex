import React from 'react';
import './SearchBar.css';

// Recebemos o "value" e a função "onChange" vindos do PokepadShell
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <div className="search-icon">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round">

          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>

        </svg>
      </div>

      {/* O input agora é "controlado" pelo React */}
      <input 
        type="text" 
        className="search-input" 
        placeholder="Digite o nome do BIXO..." 
        value={value}
        readOnly
      />
    </div>
  );
};

export default SearchBar;