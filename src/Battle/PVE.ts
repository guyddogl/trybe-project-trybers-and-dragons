import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monster: SimpleFighter[];

  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this._monster = monster;
  }

  fight(): number {
    const attack = (monster: SimpleFighter): void => {
      do {
        this.player.attack(monster);
        monster.attack(this.player);
      } while (monster.lifePoints !== -1);
    };

    this._monster.forEach((e) => attack(e));

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;