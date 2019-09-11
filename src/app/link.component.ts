import { Component, Input } from '@angular/core';
import { LinkService } from './link.service';
import { ClipboardService } from 'ngx-clipboard';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.css']
})
export class LinkComponent {
    private fixture_id ;
    links ;
    constructor(private route: ActivatedRoute, _linkService: LinkService, private _clipboardService : ClipboardService){
        this.fixture_id = this.route.snapshot.paramMap.get('fixture_id');
        _linkService.getLinks(this.fixture_id).then(link => {
            this.links = link;
            console.log(this.links)
        }).catch(err => {
            console.log('error');
        }) ;
    }


    redirect($event, link) {
        location.href = link.url ;
    }


    copyLink($event,link) {
        $event.preventDefault();
        let url = link.url ;
        this._clipboardService.copyFromContent(url);
    }

    copied($event) {
        alert('تم نقل الرابط ');
    }
}
