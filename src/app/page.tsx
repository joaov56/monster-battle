"use client"

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MonstersTable } from "@/components/MonstersTable";
import { Button } from "@/components/ui/button";
import { CreateMonsterModal } from "@/components/CreateMonsterModal";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const headers = ["name", "attack", "defense", "speed", "hp"];

  function handleModalChange(){
    setIsOpen(!isOpen);
  }

  function handleCreateNewMonster(monster: Partial<Monster>): Monster {
    return {
      id: uuidv4(),
      name: monster.name || '',
      attack: monster.attack || 0,
      defense: monster.defense || 0,
      speed: monster.speed || 0,
      hp: monster.hp || 0,
      image_url: monster.image_url || '',
    };
  }
  

  function handleRemoveMonster(id: string){
    setMonsters(monsters.filter(monster => monster.id !== id));
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-4/5 h-3/5">
        <CardHeader  className="flex flex-row justify-between">
          <CardTitle>Monstros</CardTitle>
          <Button onClick={handleModalChange}>Adicionar +</Button>
        </CardHeader>
        <CardContent>
          <MonstersTable monsters={monsters}
            headers={headers} 
            handleRemoveMonster={handleRemoveMonster} />
        </CardContent>
      </Card>

      <CreateMonsterModal onClose={handleModalChange} open={isOpen} onSubmit={handleCreateNewMonster}/>
    </div>
  );
}
