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
    links = [];
    constructor(private route: ActivatedRoute,private _linkService: ApiGatewayService, private _clipboardService : ClipboardService){
        this.fixture_id = this.route.snapshot.paramMap.get('fixture_id');
        _linkService.getLinks(this.fixture_id).then(link => {
            if (link.code === 200){
                if (link.results.length > 0){
                    this.links = link.results
                }
            }

            if (link.code != 200){
                this.links = null ; 
            }

        }).catch(err => {
            console.log(err);
        }) ;
    }


    reload(){
        this._linkService.getLinks(this.fixture_id).then(links => {
            this.links = links.results;
            this.links.sort(function(a,b){
                return  (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes) 
            })
        })
    }


    redirect($event, link) {
        window.open('http://' + link.url)
    }

    doUpvote(link_id){
        if (link_id) {
            this._linkService.upvote(link_id).then(res => {
                this.reload();
            }).catch(err => {
                console.log(err)
            })
        }
    }

    doDownvote(link_id){
        if (link_id) {
            this._linkService.downvote(link_id).then(res => {
                this.reload();
            }).catch(err => {
                console.log(err)
            })
        }
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
