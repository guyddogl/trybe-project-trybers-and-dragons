import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    Halfling._createdRacesInstances += 1;
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances():number { 
    return Halfling._createdRacesInstances; 
  }

  get maxLifePoints():number { return this._maxLifePoints; }
}

export default Halfling;