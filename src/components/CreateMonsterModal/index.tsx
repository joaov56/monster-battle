import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface CreateMonsterModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (monster: Monster) => void;
}

export function CreateMonsterModal({ open, onClose, onSubmit }: CreateMonsterModalProps) {
  const [monster, setMonster] = useState<Monster>({
    id: uuidv4(),
    name: '',
    attack: 0,
    defense: 0,
    speed: 0,
    hp: 0,
    image_url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMonster((prev) => ({
      ...prev,
      [name]: name === 'attack' || name === 'defense' || name === 'speed' || name === 'hp' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {    
    e.preventDefault();
    if (!monster.name) {
      alert('Please provide a name.');
      return;
    }
    onSubmit(monster);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar um novo monstro</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <section className="flex flex-col mt-4">
            <Label className="mb-2">Nome</Label>
            <Input
              type="text"
              name="name"
              placeholder="Nome do monstro"
              value={monster.name}
              onChange={handleChange}
              required
            />
          </section>

          <section className="flex flex-col mt-4">
            <Label className="mb-2">Ataque</Label>
            <Input
              type="number"
              name="attack"
              value={monster.attack}
              onChange={handleChange}
              placeholder="Ataque"
            />
          </section>

          <section className="flex flex-col mt-4">
            <Label className="mb-2">Defesa</Label>
            <Input
              type="number"
              name="defense"
              value={monster.defense}
              onChange={handleChange}
              placeholder="Defesa"
            />
          </section>

          <section className="flex flex-col mt-4">
            <Label className="mb-2">Velocidade</Label>
            <Input
              type="number"
              name="speed"
              value={monster.speed}
              onChange={handleChange}
              placeholder="Velocidade"
            />
          </section>

          <section className="flex flex-col mt-4">
            <Label className="mb-2">HP</Label>
            <Input
              type="number"
              name="hp"
              value={monster.hp}
              onChange={handleChange}
              placeholder="HP"
            />
          </section>

          <section className="flex flex-col mt-4">
            <Label className="mb-2">URL da Imagem</Label>
            <Input
              type="url"
              name="image_url"
              value={monster.image_url}
              onChange={handleChange}
              placeholder="URL da imagem do monstro"
            />
          </section>

          <div className="flex justify-end mt-6">
            <Button type="submit">Criar monstro</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

