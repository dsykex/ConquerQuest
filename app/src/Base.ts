import {Component} from '@angular/core';
import {Player} from './Player';
import {BackService} from '../services/BackService';
import {ArmoryMgr} from './ArmoryMgr';
import {Http} from '@angular/http';
import {Item} from './Item';
import {ConquerSphere} from './ConquerSphere';
import {BaseArmory} from './BaseArmory';

@Component({
    providers: [BackService]
})

export class Base {
    id: any;
    position: any;
    name: string;
    level: number;
    sphere: ConquerSphere;
    owner_id: any;
    http: Http;
    armory: BaseArmory;
    auras: any = {};

    constructor() { }

    /*getBase(plr: Player){
        this.bService.getObject('bases', 'owner_id', plr._id)
            .subscribe((data) => {
                return data;
            });
    }*/

    _(base: Base, id: any, name:string, position, owner_id, level){
        base.id = id;
        base.name = name;
        base.position = position;
        base.owner_id = owner_id;
        base.level = level;

        
    }
}