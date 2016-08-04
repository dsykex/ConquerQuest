import {Item} from './Item';
import {BackService} from '../services/BackService';

export class Armor extends Item{
    _defense: number = 1000;
    constructor(){
        super();
    }
}