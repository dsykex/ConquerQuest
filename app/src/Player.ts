import {Component, Injectable} from '@angular/core';
import {Geolocation} from 'ionic-native';
import {ArmoryMgr} from './ArmoryMgr';
import {ClassMgr} from './ClassMgr';
import {ProfessionsMgr} from './ProfessionsMgr';
import {BackService} from '../services/BackService';

Injectable()
export class Player{
    name: string = null;
    armoryMgr: ArmoryMgr;
    classMgr: ClassMgr;
    profMgr: ProfessionsMgr;
    
    constructor(){   
        
    }

}
