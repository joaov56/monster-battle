"use client"

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MonstersTable } from "@/components/MonstersTable";
import { Button } from "@/components/ui/button";
import { CreateMonsterModal } from "@/components/CreateMonsterModal";

export default function Home() {
  const [monsters, setMonsters] = useState<Monster[]>([
    {
      name: "Goblin",
      attack: 10,
      defense: 5,
      speed: 5,
      hp: 10,
      image_url: "/goblin.png",
    },
    {
      name: "Orc",
      attack: 15,
      defense: 10,
      speed: 5,
      hp: 15,
      image_url: "/orc.png",
    },
    {
      name: "Dragon",
      attack: 20,
      defense: 15,
      speed: 10,
      hp: 20,
      image_url: "/dragon.png",
    }
  ]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleModalChange(){
    setIsOpen(!isOpen);
  }

  function handleCreateNewMonster(monster: Monster){
    setMonsters([...monsters, monster]);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-4/5 h-3/5">
        <CardHeader  className="flex flex-row justify-between">
          <CardTitle>Monstros</CardTitle>
          <Button onClick={handleModalChange}>Adicionar +</Button>
        </CardHeader>
        <CardContent>
          <MonstersTable monsters={monsters} headers={Object.keys(monsters?.[0])} />
        </CardContent>
      </Card>

      <CreateMonsterModal onClose={handleModalChange} open={isOpen} onSubmit={handleCreateNewMonster}/>
    </div>
  );
}
