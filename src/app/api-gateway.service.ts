import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Fixture {
    fixtures: {
        fixture_id: String;
        homeTeamLogo: String;
        awayTeamLogo: String;
        awayTeamName: String;
        homeTeamName: String;
        goalsHomeTeam: String;
        goalsAwayTeam: String
        elapsed: String;
    };
}

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


interface News {
    news: [
        {
            title: String;
            language: String;
            picture_link: String;
            url: String;
            caption: String;
            source: String;
            meta: {
                isLive: Boolean;
                scrapping_date: Date;
                tags: [String]
            }
        }
    ];
}

const HEADERS = {
    'content-type': 'application/json',
    'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1YmU1YmVlMTcyZGMwYTFlYWNlNmY3NjgiLCJpYXQiOjE1NDE3ODMyNjV9.28HNMH17Krt6of39wvKC3kD3XDA9hCWlO2HLMBlIOdE`,
};

const BASE_URL = "http://192.168.0.26:3000";

@Injectable()
export class ApiGatewayService {
    constructor(private httpClient: HttpClient) {
    }

    getFixture(fixture_id) {
        return this.httpClient.get<Fixture>(BASE_URL + '/fixture/id/' + fixture_id, {
            headers: HEADERS
        }).toPromise();
    }

    addLink(link) {
        return this.httpClient.post(BASE_URL + '/add/link/', link, {
            headers: HEADERS
        }).toPromise();
    }

    deleteLink(link_id) {
        return this.httpClient.get(BASE_URL + '/delete/link/' + link_id, {
            headers: HEADERS
        }).toPromise();
    }


    getLinks(fixture_id) {
        return this.httpClient.get<Link>(BASE_URL + '/get/link/' + fixture_id, {
            headers: HEADERS
        }).toPromise();
    }

    getNews() {
        return this.httpClient.get<News>(BASE_URL + '/news/fr', {
            headers: HEADERS
        }).toPromise();
    }

    addArticle(article) {
        return this.httpClient.post(BASE_URL + '/news/add', article, {
            headers: HEADERS
        }).toPromise();
    }

    deleteArticle(article_id) {
        return this.httpClient.get(BASE_URL + '/delete/article/' + article_id, {
            headers: HEADERS
        }).toPromise();
    }
}
