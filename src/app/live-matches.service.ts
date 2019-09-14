import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
