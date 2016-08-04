import {Item} from './Item';
import {BackService} from '../services/BackService';

export class Weapon extends Item{
    _weaponDmg: any = {min: 50, max: 500};
    _speed: any = 1;
    _weight: any = 5;
    constructor(){
        super();
    }
}