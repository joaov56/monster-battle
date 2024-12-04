function calculateDamage(attack: number, defense: number): number {
    const damage = attack - defense;
    return damage > 0 ? damage : 1;
  }
  
export function battle(monster1: Monster, monster2: Monster): string {
    const rounds: string[] = [];
    let firstAttacker: Monster;
    let secondAttacker: Monster;
  
    if (
      monster1.speed > monster2.speed ||
      (monster1.speed === monster2.speed && monster1.attack > monster2.attack)
    ) {
      firstAttacker = monster1;
      secondAttacker = monster2;
    } else {
      firstAttacker = monster2;
      secondAttacker = monster1;
    }
  
    while (monster1.hp > 0 && monster2.hp > 0) {
      const damage1 = calculateDamage(firstAttacker.attack, secondAttacker.defense);
      secondAttacker.hp -= damage1;
      rounds.push(
        `${firstAttacker.name} attacks ${secondAttacker.name} and deals ${damage1} damage. ${secondAttacker.name} has ${Math.max(secondAttacker.hp, 0)} HP left.`
      );
  
      if (secondAttacker.hp <= 0) break;

      const damage2 = calculateDamage(secondAttacker.attack, firstAttacker.defense);
      firstAttacker.hp -= damage2;
      rounds.push(
        `${secondAttacker.name} attacks ${firstAttacker.name} and deals ${damage2} damage. ${firstAttacker.name} has ${Math.max(firstAttacker.hp, 0)} HP left.`
      );
    }
  
    const winner = monster1.hp > 0 ? monster1.name : monster2.name;
  
    console.log(rounds.join("\n"));
    return `${winner} wins the battle!`;
  }
  