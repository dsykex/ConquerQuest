import {Component, Injectable} from '@angular/core';
import {Geolocation} from 'ionic-native';
import {ArmoryMgr} from './ArmoryMgr';
import {ClassMgr} from './ClassMgr';
import {ProfessionsMgr} from './ProfessionsMgr';
import {BackService} from '../services/BackService';

Injectable()
export class Player{
    _name: string;
    armoryMgr: ArmoryMgr;
    classMgr: ClassMgr;
    profMgr: ProfessionsMgr;
    _health: number;
    _wounded: number = 0.8;
    
    
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
        plr.Stats.INT + plr.Stats.ARM + plr.Stats.SPR) * 0.8) * (this._wounded);
    }

}
