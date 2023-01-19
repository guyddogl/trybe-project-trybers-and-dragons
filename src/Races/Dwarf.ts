import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  public static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    Dwarf._createdRacesInstances += 1;
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  public static createdRacesInstances():number { 
    return Dwarf._createdRacesInstances; 
  }

  public get maxLifePoints():number { return this._maxLifePoints; }
}

export default Dwarf;