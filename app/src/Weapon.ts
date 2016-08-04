import {Item} from './Item';
import {BackService} from '../services/BackService';

export class Weapon extends Item{
    _weaponDmg: any = {min: 50, max: 500};
    constructor(){
        super();
    }
}