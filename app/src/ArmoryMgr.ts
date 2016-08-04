import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {BackService} from '../services/BackService';
import {Item} from './Item';
import {Player} from './Player';
import {Weapon} from './Weapon';

export class ArmoryMgr{ 
    _item: Item;
    
    constructor() {}
    
    equipItem(item: Item, plr: Player){
        //let weaponMaxDmg = (item._weaponDmg !== undefined) ? item._weaponDmg.max * 0.9 : 1;
        plr.Stats.STR += ((item.Stats.STR * 0.9) /*+ weaponMaxDmg*/) * item._durability;
    }
    
    _makeItem(name: string, durability: number, stats: any){
        let item = new Weapon();
        item._durability = durability;
        item._name = name;
        item.Stats = stats;
        this._item = item;
    }
    
    
    
    
    applyItemStats(){

    }
}