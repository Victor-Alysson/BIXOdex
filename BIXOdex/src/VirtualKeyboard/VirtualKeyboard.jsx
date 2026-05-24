import React from 'react';
import './VirtualKeyboard.css';

const VirtualKeyboard = () => {
  // Lista com as letras de A até Y para a grelha superior
  const letters = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y'
  ];

  return (
    <div className="keyboard-container">
      
      {/* Grelha Superior (A até Y) */}
      <div className="keys-grid">
        {letters.map((letter) => (
          <button key={letter} className="key-btn">
            {letter}
          </button>
        ))}
      </div>

      {/* Linha Inferior Especial */}
      <div className="bottom-row">
        <button className="key-btn fixed-width">Z</button>
        <button className="key-btn fixed-width btn-backspace">←</button>
        <button className="key-btn wide btn-clear">LIMPAR</button>
        <button className="key-btn wide btn-search">BUSCAR</button>
      </div>

    </div>
  );
};

export default VirtualKeyboard;