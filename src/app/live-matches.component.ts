import { Component, Input } from '@angular/core';
import { LiveService } from './live-matches.service';
import {ActivatedRoute} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-live',
    templateUrl: './live-matches.component.html',
    styleUrls: ['./live-matches.component.css']
})
export class LiveComponent {
    private matches ;
    private selected_match;
    constructor(_liveService: LiveService, private modalService: NgbModal) {
        _liveService.getFixtures().then((fixtures) => {
            const m = Object.keys(fixtures.fixtures).map(key => fixtures.fixtures[key])
            this.matches = m ;
            console.log(m) ;

        });
    }

    open(content, selected_fixture) {
        console.log(selected_fixture);
        this.selected_match = selected_fixture;
        this.modalService.open(content, {ariaLabelledBy: 'sl'}).result.then((result) => {
        }, (reason) => {
        });
    }
}
