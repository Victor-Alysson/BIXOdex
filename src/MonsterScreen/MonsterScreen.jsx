// MonsterScreen.jsx
import React from 'react';
import './MonsterScreen.css';

const MonsterScreen = ({ monster, allMonsters, onSelectMonster }) => {
  
  if (!monster) {
    return (
      <div className="monster-screen column-layout">
        <h3 className="screen-error-title">SISTEMA: CRIATURA NÃO ENCONTRADA</h3>
        <p className="screen-error-subtitle">SELECIONE UM MODELO DISPONÍVEL:</p>
        
        {/* Lista de monstros do banco de dados */}
        <div className="monsters-suggestion-list">
          {allMonsters.map((m) => (
            <button 
              key={m.id} 
              className="suggestion-item-btn"
              /* Ao clicar, avisa o Pai para atualizar o texto da busca e ativar o monstro */
              onClick={() => onSelectMonster(m.name, m)}
            >
              &gt; {m.name} [TIPO: {m.type}]
            </button>
          ))}
        </div>
      </div>
    );
  }

  // LAYOUT NORMAL: Se o monstro existir, roda o código que já tínhamos antes
  return (
    <div className="monster-screen">
      
      {/* Lado Esquerdo: Imagem */}
      <div className="monster-image-container">
        {monster.image && (
          <img 
            src={monster.image} 
            alt={monster.name} 
          />
        )}
      </div>
      
      {/* Lado Direito: Informações */}
      <div className="monster-info">
        <h2 className="monster-title">{monster.name}</h2>
        <div className="monster-stat"><span>TIPO: {monster.type}</span></div>
        <div className="monster-stat"><span>NÍVEL: {monster.level}</span></div>
        
        <div className="stats-bottom">
          <div className="monster-stat"><span>HP:</span><span>{monster.hp}</span></div>
          <div className="monster-stat"><span>ATK:</span><span>{monster.atk}</span></div>
          <div className="monster-stat"><span>DEF:</span><span>{monster.def}</span></div>
        </div>
      </div>

    </div>
  );
};

export default MonsterScreen;