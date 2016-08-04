import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Player} from '../../src/Player';
import {BackService} from '../../services/BackService';
import {ArmoryMgr} from '../../src/ArmoryMgr';

@Component({
    templateUrl: 'build/pages/character/character.html',
    providers: [Player, BackService, ArmoryMgr]
})

export class CharacterPage {
    _plr: Player;
    
constructor(private http: Http, plr: Player, armMgr: ArmoryMgr){
        this._plr = plr;
        this._plr.armoryMgr = armMgr;
        plr._('DSYKESS', this._plr);
        let _itemStats = {
            STR: 200,
            AGI: 100, 
            INT: 100,
            ARM: 100,
            SPR: 100
        }
        let plrArmory = this._plr.armoryMgr;
        plrArmory._makeItem('DSykes Sword', 1, _itemStats);
        plrArmory.equipItem(plrArmory._item, this._plr);
    }   
}