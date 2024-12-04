"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MonstersTable } from "@/components/MonstersTable";
import { CreateMonsterModal } from "@/components/CreateMonsterModal";
import { InfoTooltip } from "@/components/InfoTooltip";
import { useMonstersManagement } from "./hooks/useMonstersManagement";

export default function Home() {
  const {
    monsters,
    selectedMonsters,
    isModalOpen,
    toggleModal,
    createNewMonster,
    removeMonster,
    selectMonster,
    startBattle
  } = useMonstersManagement();

  const headers = ["name", "attack", "defense", "speed", "hp"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-4/5 h-3/5">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Monstros</CardTitle>
          <div className="flex items-center">
            <InfoTooltip />
            <Button onClick={toggleModal} className="mr-4">
              Adicionar +
            </Button>
            {selectedMonsters.length === 2 && (
              <Button onClick={startBattle}>Batalhar</Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <MonstersTable 
            monsters={monsters}
            headers={headers} 
            handleRemoveMonster={removeMonster} 
            handleSelectMonster={selectMonster}
            selectedMonsters={selectedMonsters.length}
          />
        </CardContent>
      </Card>

      <CreateMonsterModal
        onClose={toggleModal}
        open={isModalOpen}
        onSubmit={createNewMonster}
      />
    </div>
  );
}