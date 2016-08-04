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
    
    Stats: any = {
        STR: 50,
        AGI: 50,
        INT: 50,
        AMR: 50,
        SPR: 50
    }

    constructor(){  }
    
    _(name: string, plr: Player){
        plr._name = name;
    }

}
