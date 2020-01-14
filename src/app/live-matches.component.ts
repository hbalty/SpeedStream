import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiGatewayService } from './api-gateway.service';

@Component({
    selector: 'app-live',
    templateUrl: './live-matches.component.html',
    styleUrls: ['./live-matches.component.css']
})
export class LiveComponent {
    private matches ;
    private selected_match;
    constructor(_liveService: ApiGatewayService, private modalService: NgbModal) {
        _liveService.getFixtures().then((fixtures) => {
            this.matches = fixtures ;
        }).catch(err =>{
            console.log('something went wrong')
        })
    }

    open(content, selected_fixture) {
        console.log(selected_fixture);
        this.selected_match = selected_fixture;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        }, (reason) => {
            this.modalService.dismissAll();
        });
    }
}
