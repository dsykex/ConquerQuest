import {Player} from './Player';
import {BackService} from '../services/BackService';
import {ArmoryMgr} from './ArmoryMgr';
import {Item} from './Item';
import {ConquerSphere} from './ConquerSphere';

export class Base {
    _position: any;
    _name: string;
    _requiredLevel: number;
    _requiredSphere: ConquerSphere;

    constructor() {}

    _(base: Base, name:string, position){
        base._name = name;
        base._position = position;
    }
}