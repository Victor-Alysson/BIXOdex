import React from 'react';
import './MonsterScreen.css';

const MonsterScreen = () => {
  return (
    <div className="monster-screen">
      
      {/* Lado Esquerdo: Imagem */}
      <div className="monster-image-container">
        {/* Futuramente, a tag <img /> do monstro entrará aqui */}
      </div>
      
      {/* Lado Direito: Informações */}
      <div className="monster-info">
        <h2 className="monster-title">DRAGÃO DE FOGO</h2>
        
        <div className="monster-stat">
          <span>TIPO: Fogo</span>
        </div>
        <div className="monster-stat">
          <span>NÍVEL: 45</span>
        </div>
        
        {/* Bloco inferior com os atributos de batalha */}
        <div className="stats-bottom">
          <div className="monster-stat">
            <span>HP:</span>
            <span>180</span>
          </div>
          <div className="monster-stat">
            <span>ATK:</span>
            <span>95</span>
          </div>
          <div className="monster-stat">
            <span>DEF:</span>
            <span>78</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MonsterScreen;