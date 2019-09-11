import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Link {
    fixture_id: string;
    url: String;
    provider: String;
    upvotes: Number;
    downvotes: Number;
    compatibility: {
        phone: Boolean;
        tablet: Boolean;
        pc: Boolean;
    }
}

@Injectable()
export class LinkService {

    constructor(private httpClient: HttpClient){

    }

    getLinks(fixture_id) {
        return this.httpClient.get<Link>('http://localhost:3000/get/link/' + fixture_id,{
            headers: {
                'content-type': 'application/json',
            }
        }).toPromise();
    }
}
