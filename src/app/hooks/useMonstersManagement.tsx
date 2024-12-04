import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { battle } from '../utils/battle';

export const useMonstersManagement = () => {
  const [monsters, setMonsters] = useState<Monster[]>([
    {
      id: uuidv4(),
      name: "Goblin",
      attack: 10,
      defense: 5,
      speed: 5,
      hp: 10,
      image_url: "/goblin.png",
    },
    {
      id: uuidv4(),
      name: "Orc",
      attack: 15,
      defense: 10,
      speed: 5,
      hp: 15,
      image_url: "/orc.png",
    },
    {
      id: uuidv4(),
      name: "Dragon",
      attack: 20,
      defense: 15,
      speed: 10,
      hp: 20,
      image_url: "/dragon.png",
    }
  ]);

  const [battleLogs, setBattleLogs] = useState<string[]>([]);
  const [battleLogsModalOpen, setBattleLogsModalOpen] = useState<boolean>(false);

  const [selectedMonsters, setSelectedMonsters] = useState<Monster[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => setIsModalOpen(prev => !prev);

  const createNewMonster = (monster: Partial<Monster>): Monster => {
    const newMonster = {
      id: uuidv4(),
      name: monster.name || '',
      attack: monster.attack || 0,
      defense: monster.defense || 0,
      speed: monster.speed || 0,
      hp: monster.hp || 0,
      image_url: monster.image_url || '',
    };

    setMonsters(prev => [...prev, newMonster]);
    return newMonster;
  };

  const removeMonster = (id: string) => {
    setMonsters(prev => prev.filter(monster => monster.id !== id));
  };

  const selectMonster = (id: string) => {
    setSelectedMonsters(prev => {
      if (prev.find(monster => monster.id === id)) {
        return prev.filter(monster => monster.id !== id);
      }

      const monster = monsters.find(monster => monster.id === id);
      return monster && prev.length < 2 
        ? [...prev, monster] 
        : prev;
    });
  };

  const startBattle = () => {
    if (selectedMonsters.length === 2) {
      const battleLogs = battle(selectedMonsters[0], selectedMonsters[1]);
      setSelectedMonsters([]);
      setBattleLogs(battleLogs);
      setBattleLogsModalOpen(true);
    }
  };

  const resetLogs = ()=> {
    setBattleLogs([]);
    setBattleLogsModalOpen(false);
  }

  const toggleBattleLogsModal = () => setBattleLogsModalOpen(prev => !prev);

  return {
    monsters,
    selectedMonsters,
    isModalOpen,
    toggleModal,
    createNewMonster,
    removeMonster,
    selectMonster,
    startBattle,
    battleLogs,
    battleLogsModalOpen,
    toggleBattleLogsModal,
    resetLogs,
  };
};