import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

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
export class LiveService {
    private closeResult: string;
    constructor(private httpClient: HttpClient){
    }


    getFixtures(){
        return this.httpClient.get<Fixture>('http://localhost:3000/live',{
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1YmU1YmVlMTcyZGMwYTFlYWNlNmY3NjgiLCJpYXQiOjE1NDE3ODMyNjV9.28HNMH17Krt6of39wvKC3kD3XDA9hCWlO2HLMBlIOdE',
            }
        }).toPromise();
    }
}
