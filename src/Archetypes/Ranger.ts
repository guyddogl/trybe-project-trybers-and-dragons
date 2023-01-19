import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  public static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances():number {
    return Ranger._createdArchetypeInstances;
  }

  public get energyType(): EnergyType { return this._energyType; }
}

export default Ranger;