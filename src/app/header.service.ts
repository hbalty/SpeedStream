import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Fixture{
    fixtures : {
        homeTeamLogo: String,
        awayTeamLogo: String,
        awayTeamName: String,
        homeTeamName: String,
        goalsHomeTeam: String,
        goalsAwayTeam: String,
        elapsed: String,
    };

}



@Injectable()
export class HeaderService{
    
    constructor(private httpClient: HttpClient){
        
    }
    
}
