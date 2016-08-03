import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Player} from '../../src/Player';

@Component({
    templateUrl: 'build/pages/character/character.html',
    providers: [Player]
})

export class CharacterPage {
    plrShit: any;
    
    constructor(private http: Http){
        this.plrShit = new Player();
        this.plrShit.name = 'DSykes';
        console.log(this.plrShit.name);
    }   
}