// VirtualKeyboard.jsx
import React from 'react';
import './VirtualKeyboard.css';

// Recebemos as duas propriedades do componente Pai (PokepadShell)
const VirtualKeyboard = ({ onKeyPress, activeKey }) => {
  // Lista de letras para criar a grelha de botões automaticamente
  const letters = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y'
  ];

  return (
    <div className="keyboard-container">
      
      {/* GRELHA DE LETRAS (A até Y) */}
      <div className="keys-grid">
        {letters.map((letter) => (
          <button 
            key={letter} 
            className={`key-btn ${activeKey === letter ? 'active-physical' : ''}`}
            onClick={() => onKeyPress(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* LINHA INFERIOR (Botão Z, Espaço e Ações) */}
      <div className="bottom-row">
        
        {/* Botão Z */}
        <button 
          className={`key-btn fixed-width ${activeKey === 'Z' ? 'active-physical' : ''}`} 
          onClick={() => onKeyPress('Z')}
        >
          Z
        </button>
        
        {/* Botão Apagar (Seta) */}
        <button 
          className={`key-btn fixed-width btn-backspace ${activeKey === 'Backspace' ? 'active-physical' : ''}`} 
          onClick={() => onKeyPress('←')}
        >
          ←
        </button>
        
        {/* Barra de Espaço */}
        <button 
          className={`key-btn space-bar ${activeKey === ' ' ? 'active-physical' : ''}`} 
          onClick={() => onKeyPress(' ')}
        >
          ESPAÇO
        </button>
        
        {/* Botão Limpar */}
        <button 
          className={`key-btn wide btn-clear ${activeKey === 'Delete' ? 'active-physical' : ''}`} 
          onClick={() => onKeyPress('LIMPAR')}
        >
          LIMPAR
        </button>
        
        {/* Botão Buscar */}
        <button 
          className={`key-btn wide btn-search ${activeKey === 'Enter' ? 'active-physical' : ''}`} 
          onClick={() => onKeyPress('BUSCAR')}
        >
          BUSCAR
        </button>
      </div>

    </div>
  );
};

export default VirtualKeyboard;