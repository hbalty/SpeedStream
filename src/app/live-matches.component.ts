import { Component, Input } from '@angular/core';
import { LiveService } from './live-matches.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-live',
    templateUrl: './live-matches.component.html',
    styleUrls: ['./live-matches.component.css']
})
export class LiveComponent {
    private matches ;
    constructor(_liveService: LiveService){
        _liveService.getFixtures().then((fixtures) => {
            const m = Object.keys(fixtures.fixtures).map(key => fixtures.fixtures[key])
            this.matches = m ;
            console.log(m) ;

        });
    }
}
