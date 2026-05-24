// PokepadShell.jsx
import React, { useState, useEffect } from 'react';
import './PokepadShell.css';
import MonsterScreen from '../MonsterScreen/MonsterScreen';
import SearchBar from '../SearchBar/SearchBar';
import VirtualKeyboard from '../VirtualKeyboard/VirtualKeyboard';

const PokepadShell = () => {
  const [searchText, setSearchText] = useState('');
  const [activeKey, setActiveKey] = useState('');

  const handleKeyPress = (key) => {
    if (key === 'LIMPAR') {
      setSearchText('');
    } else if (key === '←') {
      setSearchText((prev) => prev.slice(0, -1));
    } else if (key === 'BUSCAR') {
      setSearchText((atual) => {
        alert(`A buscar o monstro: ${atual}`);
        return atual; // Não altera o texto, apenas lê o valor dele
      });
    } else {
      setSearchText((prev) => prev + key);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      const upperKey = key.toUpperCase();

      if ((upperKey >= 'A' && upperKey <= 'Z') || key === ' ' || key === 'Backspace' || key === 'Enter' || key === 'Delete') {
        
        // 1. Acende o botão virtual
        if (key === ' ') setActiveKey(' ');
        else if (key === 'Backspace') setActiveKey('Backspace');
        else if (key === 'Enter') setActiveKey('Enter');
        else if (key === 'Delete') setActiveKey('Delete');
        else setActiveKey(upperKey);

        // 2. Digita a letra correspondente
        if (key === 'Backspace') handleKeyPress('←');
        else if (key === 'Enter') handleKeyPress('BUSCAR');
        else if (key === 'Delete') handleKeyPress('LIMPAR');
        else handleKeyPress(upperKey);
      }
    };

    const handleKeyUp = () => {
      setActiveKey('');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="pokepad-shell">
      <MonsterScreen />
      <SearchBar value={searchText} onChange={setSearchText} />
      <VirtualKeyboard onKeyPress={handleKeyPress} activeKey={activeKey} />
    </div>
  );
};

export default PokepadShell;