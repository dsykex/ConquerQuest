import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Player} from '../../src/Player';
import {BackService} from '../../services/BackService';

@Component({
    templateUrl: 'build/pages/character/character.html',
    providers: [Player, BackService]
})

export class CharacterPage {
    myPlr: Player;
    
constructor(private http: Http){
        
    }   
}