import { Component, Input } from '@angular/core';
import { LinkService } from './link.service';
import { ClipboardService } from 'ngx-clipboard';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {

    
    links = []; 
    myDataArray = [
        1,
        2,
        3,
        4
    ]
    constructor(_linkService : LinkService, private _clipboardService : ClipboardService){
        this.links = _linkService.getLinks() ; 
    }


    copyLink($event,link){
        $event.preventDefault();
        this._clipboardService.copyFromContent(link.url)
    }

    copied($event){
        alert('تم نقل الرابط ')
    }
}
