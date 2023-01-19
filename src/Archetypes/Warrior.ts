import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  public static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances():number {
    return Warrior._createdArchetypeInstances;
  }

  public get energyType(): EnergyType { return this._energyType; }
}

export default Warrior;