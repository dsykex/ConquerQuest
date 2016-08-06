import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {BackService} from '../services/BackService';
import {Item} from './Item';
import {Player} from './Player';
import {Weapon} from './Weapon';
import {Armor} from './Armor';

export class ArmoryMgr{ 
    _item: Item;
    itemTypes: any = {
        WEAPON: 1,
        ARMOR: 2,
        TRINKET: 3
    }
    
    constructor() {}
    
    equipItem(item: any, plr: Player, itemType: any, itemSlot: any){
        switch(itemType){
            case this.itemTypes.WEAPON:{
                let weaponDmgMod = item._weaponDmg.max * 0.4;
                plr.Stats.STR += (weaponDmgMod); 
            }break;
                
            case this.itemTypes.ARMOR:{
                let armorMod = item._defense;
                //plr.Stats.ARM += item._defense;
            }break;
        }
               
        plr.Stats.STR += (item.Stats.STR * 0.5) * item._durability;
        plr.Stats.ARM += (item.Stats.ARM * 0.3) * item._durability;
        
        switch(itemSlot){
            case plr.EquipmentSlots.HEAD:{
                plr.EquipmentSlots.HEAD = item;
            }break;
            case plr.EquipmentSlots.SHOULDERS:{
                plr.EquipmentSlots.SHOULDERS = item;
            }break;
            case plr.EquipmentSlots.CHEST:{
                plr.EquipmentSlots.CHEST = item;
            }break;
            case plr.EquipmentSlots.HANDS:{
                plr.EquipmentSlots.HANDS = item;
            }break;
            case plr.EquipmentSlots.WAIST:{
                plr.EquipmentSlots.WAIST = item;
            }break;
            case plr.EquipmentSlots.LEGS:{
                plr.EquipmentSlots.LEGS = item;
            }break;
            case plr.EquipmentSlots.FEET:{
                plr.EquipmentSlots.HANDS = item;
            }break;
            case plr.EquipmentSlots.MAIN_HAND:{
                plr.EquipmentSlots.MAIN_HAND = item;
            }break;
            case plr.EquipmentSlots.OFF_HAND:{
                plr.EquipmentSlots.OFF_HAND = item;
            }break;
        }
        
   
        console.log(plr);
    }
    
    _makeItem(name: string, durability: number, stats: any, weaponDmg: any, defense: number, itemType: any, itemSlot: any){
        let item = null;
        
        switch(itemType){
            case this.itemTypes.WEAPON:{
               item = new Weapon();
               item._weaponDmg = weaponDmg;
            }break;
                
            case this.itemTypes.ARMOR:{
                item = new Armor();
                item._defense = defense;
            }break;
        }
        
    
        item._durability = durability;
        item._name = name;
        
        item.Stats = stats;
        item._type = itemType;
        item._slot = itemSlot;
        
        this._item = item;
        console.log(item);
    }
    
    applyItemStats(value){
        return value;
    }
}