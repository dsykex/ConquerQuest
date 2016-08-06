import {BackService} from '../services/BackService';

export class Item{
    _item: Item;
    _name: string;
    _durability: number = 1;
    _type: any;
    _slot: any;
    _isBuffable: boolean;
    _level: number;
    
    Stats: any = {
        STR: 50,
        AGI: 50,
        INT: 50,
        ARM: 50,
        SPR: 50
    }
    
    constructor(){
        
    }
    
}