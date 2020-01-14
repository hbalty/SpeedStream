import { Component, Input, OnInit ,AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeaderService } from './header.service'; 
import { ApiGatewayService } from './api-gateway.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  constructor(private route : ActivatedRoute, private headerService: ApiGatewayService){
  }

  fixture_id ;
  homeTeamLogo ;
  awayTeamLogo  ;
  awayTeamName ;
  homeTeamName  ;
  goalsHomeTeam ;
  goalsAwayTeam  ;
  leagueName; 
  leagueLogo;
  elapsed ;

  ngAfterViewInit(){
    this.fixture_id = this.route.snapshot.paramMap.get('fixture_id'); 
    console.log(this.fixture_id)
    this.headerService.getFixture(this.fixture_id).then(data => {
      console.log(data.fixtures[0])
      this.homeTeamLogo = data.fixtures[0].homeTeam.logo ;
      this.awayTeamLogo = data.fixtures[0].awayTeam.logo ;
      this.homeTeamName = data.fixtures[0].homeTeam.team_name ;
      this.awayTeamName = data.fixtures[0].awayTeam.team_name ;
      this.goalsHomeTeam = data.fixtures[0].goalsHomeTeam ;
      this.goalsAwayTeam = data.fixtures[0].goalsAwayTeam ;
      this.leagueName = data.fixtures[0].league.name;
      this.leagueLogo = data.fixtures[0].league.logo != null ? data.fixtures[0].league.logo : data.fixtures[0].league.flag;
      this.elapsed = data.fixtures[0].elapsed;
    }).catch(err => {
      console.log('something went wrong')
    })
  }

  ngOnInit(){
   
  }

}
