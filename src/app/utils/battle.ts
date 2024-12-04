function calculateDamage(attack: number, defense: number): number {
  const baseDamage = Math.max(attack - defense, 0);
  return Math.max(baseDamage + Math.floor(Math.random() * 3), 1);
}

function determineFirstAttacker(monster1: Monster, monster2: Monster): [Monster, Monster] {
  if (monster1.speed > monster2.speed) return [monster1, monster2];
  if (monster2.speed > monster1.speed) return [monster2, monster1];
  
  if (monster1.attack > monster2.attack) return [monster1, monster2];
  if (monster2.attack > monster1.attack) return [monster2, monster1];
  
  return Math.random() > 0.5 ? [monster1, monster2] : [monster2, monster1];
}

export function battle(monster1: Monster, monster2: Monster): string[] {
  const fighter1 = { ...monster1 };
  const fighter2 = { ...monster2 };

  const rounds: string[] = [];
  const [firstAttacker, secondAttacker] = determineFirstAttacker(fighter1, fighter2);

  let attacker = { ...firstAttacker };
  let defender = { ...secondAttacker };

  while (attacker.hp > 0 && defender.hp > 0) {
    const damage = calculateDamage(attacker.attack, defender.defense);
    defender.hp = Math.max(defender.hp - damage, 0);

    rounds.push(
      `${attacker.name} atacou ${defender.name} e deu ${damage} de dano. ${defender.name} tem ${Math.max(defender.hp, 0)} de vida restante.`
    );

    [attacker, defender] = [defender, attacker];

    if (attacker.hp <= 0 || defender.hp <= 0) break;
  }

  const winner = attacker.hp > 0 ? attacker.name : defender.name;
  rounds.push(winner);

  return rounds;
}