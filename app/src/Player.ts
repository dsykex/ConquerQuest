import {Component, Injectable} from '@angular/core';
import {Geolocation} from 'ionic-native';
import {ArmoryMgr} from './ArmoryMgr';
import {ClassMgr} from './ClassMgr';
import {ProfessionsMgr} from './ProfessionsMgr';
import {ConquerSphere} from './ConquerSphere';
import {BackService} from '../services/BackService';
import {Item} from './Item';

Injectable()
export class Player{
    _name: string;
    armoryMgr: ArmoryMgr;
    classMgr: ClassMgr;
    profMgr: ProfessionsMgr;
    _health: number;
    _wounded: number = 1;
    _conquerSphere: ConquerSphere;
    _level: number = 1;

    EquipmentSlots: any = {
        HEAD: 1,
        SHOULDER: 2,
        HANDS: 3,
        CHEST: 4,
        WAIST: 5,
        LEGS: 6,
        FEET: 7,
        MAIN_HAND: 8,
        OFF_HAND: 9
    }
    
    Stats: any = {
        STR: 50,
        AGI: 50,
        INT: 50,
        ARM: 50,
        SPR: 50
    }

    constructor(){ 
      
    }
    
    _(name: string, plr: Player){
        plr._name = name;
        plr._health = ((plr.Stats.STR + plr.Stats.AGI + 
        plr.Stats.INT + plr.Stats.ARM + plr.Stats.SPR) * 0.9) * (this._wounded);
        plr._conquerSphere = new ConquerSphere();
    }

}
