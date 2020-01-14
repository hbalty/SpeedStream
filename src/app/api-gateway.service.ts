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
        goalsAwayTeam: String;
        homeTeam: {
            team_id : String, 
            team_name: String, 
            logo: String

        },
        awayTeam: {
            team_id : String, 
            team_name: String, 
            logo: String
        }
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

interface Links {
    code : number,
    results : [
        Link
    ]
}

interface Response {
    message: string, 
    code: number
}

interface News {
    articles : [
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
    'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZGVlYTE3Yzg4NDAxMjMzMjQ0ZjhiNDEiLCJpYXQiOjE1NzU5MTk5OTZ9.2ih3CY75Tg6rB-h2ijP8c9TLcx0FBr57OQAGZs7XJQ8`,
};

const BASE_URL = "http://192.168.0.30:3000";

@Injectable()
export class ApiGatewayService {
    constructor(private httpClient: HttpClient) {
    }

    getFixture(fixture_id) {
        return this.httpClient.get<Fixture>(BASE_URL + '/fixture/id/' + fixture_id, {
            headers: HEADERS
        }).toPromise();
    }

    getFixtures() {
        return this.httpClient.get<Fixture>(BASE_URL + '/live', {
            headers: HEADERS
        }).toPromise();
    }

    getFixturesByDate(date) {
        console.log(BASE_URL + '/fixture/date/' + date)
        return this.httpClient.get<Response>(BASE_URL + '/fixture/date/' + date, {
            headers: HEADERS
        }).toPromise();
    }

    addLink(link) {
        return this.httpClient.post<Response>(BASE_URL + '/add/link/', link, {
            headers: HEADERS
        }).toPromise();
    }

    deleteLink(link_id) {
        return this.httpClient.get(BASE_URL + '/delete/link/' + link_id, {
            headers: HEADERS
        }).toPromise();
    }


    getLinks(fixture_id) {
        return this.httpClient.get<Links>(BASE_URL + '/get/link/' + fixture_id, {
            headers: HEADERS
        }).toPromise();
    }

    getNews() {
        return this.httpClient.get<News>(BASE_URL + '/news/fr', {
            headers: HEADERS
        }).toPromise();
    }

    addArticle(article) {
        return this.httpClient.post<Response>(BASE_URL + '/news/add', article, {
            headers: HEADERS
        }).toPromise();
    }

    updateArticle(article, id) {
        article._id = id ; 
        return this.httpClient.post<Response>(BASE_URL + '/news/update', article, {
            headers: HEADERS
        }).toPromise();
    }

    getArticle(id){
        return this.httpClient.get(BASE_URL + '/article/' + id, {
            headers: HEADERS
        }).toPromise();
    }

    deleteArticle(article_id) {
        return this.httpClient.get(BASE_URL + '/delete/article/' + article_id, {
            headers: HEADERS
        }).toPromise();
    }

    upvote(link_id){
        return this.httpClient.get<Response>(BASE_URL + '/link/upvote/' + link_id, {
            headers: HEADERS
        }).toPromise();
    }

    downvote(link_id){
        return this.httpClient.get<Response>(BASE_URL + '/link/downvote/' + link_id, {
            headers: HEADERS
        }).toPromise();
    }
}
