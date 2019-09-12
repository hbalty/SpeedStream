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


@Injectable()
export class ApiGatewayService{
    constructor(private httpClient: HttpClient){
    }

    getFixture(fixture_id){
        return this.httpClient.get<Fixture>('http://localhost:3000/fixture/id/' + fixture_id,{
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1YmU1YmVlMTcyZGMwYTFlYWNlNmY3NjgiLCJpYXQiOjE1NDE3ODMyNjV9.28HNMH17Krt6of39wvKC3kD3XDA9hCWlO2HLMBlIOdE',
            }
        }).toPromise();
    }

    addLink(link){
        return this.httpClient.post('http://localhost:3000/add/link/', link,{
            headers: {
                'content-type': 'application/json',
            },
        }).toPromise();
    }


    
}