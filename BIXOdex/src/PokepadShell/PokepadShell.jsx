// PokepadShell.jsx
import React from 'react';
import './PokepadShell.css';

// Futuras importações (vamos descomentar à medida que construímos)
import MonsterScreen from '../MonsterScreen/MonsterScreen.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import VirtualKeyboard from '../VirtualKeyboard/VirtualKeyboard.jsx';

const PokepadShell = () => {
  return (
    <div className="pokepad-shell">
      
      {/* 1. Módulo do Ecrã do Monstro */}
      <MonsterScreen />

      {/* 2. Módulo da Barra de Pesquisa */}
      <SearchBar />

      {/* 3. Módulo do Teclado Virtual */}
      <VirtualKeyboard />

    </div>
  );
};

export default PokepadShell;