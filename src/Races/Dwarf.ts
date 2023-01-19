import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    Dwarf._createdRacesInstances += 1;
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances():number { return Dwarf._createdRacesInstances; }

  get maxLifePoints():number { return this._maxLifePoints; }
}

export default Dwarf;