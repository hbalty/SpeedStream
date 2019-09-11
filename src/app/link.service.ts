import { Component, Injectable } from '@angular/core';

@Injectable()
export class LinkService {
    getLinks(){
        
        return [
            {
                id: 1,
                url : 'http://www.yalla-shoot.com/live/16795/jordan-vs-paraguay.html',
                provider : 'yallashoot',
                upvotes: 14,
                downvotes: 15
            },{
                id: 1,
                url : 'http://www.yalla-shoot.com/live/16795/jordan-vs-paraguay.html',
                provider : 'yallashoot',
                upvotes: 14,
                downvotes: 15
            }
        ]
    }
}
