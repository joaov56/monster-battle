function calculateDamage(attack: number, defense: number): number {
    const damage = attack - defense;
    return damage > 0 ? damage : 1;
  }
  
export function battle(monster1: Monster, monster2: Monster): string[] {
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
        `${firstAttacker.name} atacou ${secondAttacker.name} e deu ${damage1} de dano. ${secondAttacker.name} tem ${Math.max(secondAttacker.hp, 0)} de vida restante.`
      );
  
      if (secondAttacker.hp <= 0) break;

      const damage2 = calculateDamage(secondAttacker.attack, firstAttacker.defense);
      firstAttacker.hp -= damage2;
      rounds.push(
        `${secondAttacker.name} atacou ${firstAttacker.name} e deu ${damage2} de dano. ${firstAttacker.name} tem ${Math.max(firstAttacker.hp, 0)} de vida restante.`
      );
    }
  
    const winner = monster1.hp > 0 ? monster1.name : monster2.name;
    
    rounds.push(winner);
    return rounds;
  }
  