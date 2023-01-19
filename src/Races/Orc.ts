import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    Orc._createdRacesInstances += 1;
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances():number { return Orc._createdRacesInstances; }

  get maxLifePoints():number { return this._maxLifePoints; }
}

export default Orc;