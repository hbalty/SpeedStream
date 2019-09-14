import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = "http://192.168.0.26:3000"
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
    };
}

@Injectable()
export class LinkService {

    constructor(private httpClient: HttpClient) {

    }

}
