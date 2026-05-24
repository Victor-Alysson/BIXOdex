// PokepadShell.jsx
import React, { useState, useEffect } from 'react';
import './PokepadShell.css';

import MonsterScreen from '../MonsterScreen/MonsterScreen';
import SearchBar from '../SearchBar/SearchBar';
import VirtualKeyboard from '../VirtualKeyboard/VirtualKeyboard';

import { monstersData } from '../monstersData';

const PokepadShell = () => {
  const [searchText, setSearchText] = useState('');
  const [activeKey, setActiveKey] = useState('');
  const [currentMonster, setCurrentMonster] = useState(null);

  const handleKeyPress = (key) => {
    
    // 1. SE FOR O BOTÃO LIMPAR
    if (key === 'LIMPAR') {
      setSearchText('');
      setCurrentMonster(null);
    } 
    
    // 2. SE FOR O BOTÃO APAGAR (SETA)
    else if (key === '←') {
      setSearchText((prev) => prev.slice(0, -1));
    } 
    
    // 3. SE FOR O BOTÃO BUSCAR
    else if (key === 'BUSCAR') {
      setSearchText((textoNaTela) => {
        const termoBusca = textoNaTela.trim();
        
        const encontrado = monstersData.find(
          (m) => m.name === termoBusca
        );

        if (encontrado) {
          setCurrentMonster(encontrado); // Se achou, bota o monstro na tela
        } else {
          setCurrentMonster(null); // Se errou, abre a lista de sugestões
        }
        
        return textoNaTela; // Não mexe no texto digitado
      });
    } 
    
    // 4. SE FOR UMA LETRA OU ESPAÇO
    else {
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

       setSearchText((atual) => {
        const encontrado = monstersData.find(
          (m) => m.name === atual.trim()
        );

        if (encontrado) {
          setCurrentMonster(encontrado); // Ativa o monstro encontrado
        } else {
          setCurrentMonster(null); // Ativa o modo lista se não existir
        }
        
        return atual; // Mantém o texto na barra de pesquisa intacto
      });
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

      <MonsterScreen 
        monster={currentMonster} 
        allMonsters={monstersData}
        onSelectMonster={(name, obj) => {
          setSearchText(name);
          setCurrentMonster(obj);
        }} />

      <SearchBar value={searchText} onChange={setSearchText} />
      
      <VirtualKeyboard onKeyPress={handleKeyPress} activeKey={activeKey} />
    </div>
  );
};

export default PokepadShell;