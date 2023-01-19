import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  public static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    Elf._createdRacesInstances += 1;
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  public static createdRacesInstances():number { 
    return Elf._createdRacesInstances; 
  }

  public get maxLifePoints():number { return this._maxLifePoints; }
}

export default Elf;