import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Player} from '../../src/Player';
import {BackService} from '../../services/BackService';
import {ArmoryMgr} from '../../src/ArmoryMgr';
import {Item} from '../../src/Item';

@Component({
    templateUrl: 'build/pages/character/character.html',
    providers: [Player, BackService, ArmoryMgr]
})

export class CharacterPage {
    _plr: Player;
    _plrEquipment: any;
constructor(private http: Http, plr: Player, armMgr: ArmoryMgr){
        this._plr = plr;
        this._plr.armoryMgr = armMgr;
        plr._('DSYKESS', this._plr);
        let _itemStats = {
            STR: 100,
            AGI: 100, 
            INT: 100,
            ARM: 100,
            SPR: 100
        }
    
        let plrArmory = this._plr.armoryMgr;
        plrArmory._makeItem('DSykes Sword', 1, _itemStats, {min: 100, max: 500}, 0, plrArmory.itemTypes.WEAPON, this._plr.EquipmentSlots.MAIN_HAND);
        plrArmory.equipItem(plrArmory._item, this._plr, plrArmory.itemTypes.WEAPON, this._plr.EquipmentSlots.MAIN_HAND);
        
        plrArmory._makeItem('DSykes Breastplate', 1, _itemStats, 0, 400, plrArmory.itemTypes.ARMOR, this._plr.EquipmentSlots.CHEST);
        plrArmory.equipItem(plrArmory._item, this._plr, plrArmory.itemTypes.ARMOR, this._plr.EquipmentSlots.CHEST);
    
    plrArmory._makeItem('DSykes Off-Hand Dagger', 1, _itemStats, {min: 100, max: 200}, 0, plrArmory.itemTypes.WEAPON, this._plr.EquipmentSlots.OFF_HAND);
        plrArmory.equipItem(plrArmory._item, this._plr, plrArmory.itemTypes.ARMOR, this._plr.EquipmentSlots.OFF_HAND);
    
        this._plrEquipment = this._plr.EquipmentSlots;
    }   
}