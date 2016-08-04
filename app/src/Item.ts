import {BackService} from '../services/BackService';

export class Item{
    _item: Item;
    _name: string;
    _durability: number = 1;
    _isBuffable: boolean;
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