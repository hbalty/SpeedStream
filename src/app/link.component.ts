import { Component, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import {ActivatedRoute} from '@angular/router';
import { ApiGatewayService } from './api-gateway.service';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.css']
})
export class LinkComponent {
    private fixture_id ;
    links ;
    constructor(private route: ActivatedRoute, _linkService: ApiGatewayService, private _clipboardService : ClipboardService){
        this.fixture_id = this.route.snapshot.paramMap.get('fixture_id');
        _linkService.getLinks(this.fixture_id).then(link => {
            this.links = link;
            console.log(this.links)
        }).catch(err => {
            console.log(err);
        }) ;
    }


    redirect($event, link) {
        location.href = link.url ;
    }


    copyLink($event,link) {
        $event.preventDefault();
        let url = link.url ;
        this._clipboardService.copyFromContent(url);
        alert('link copied')
    }

    copied($event) {
        alert('تم نقل الرابط ');
    }
}
