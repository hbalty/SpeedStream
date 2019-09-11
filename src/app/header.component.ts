import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeaderService } from './header.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  constructor(private route : ActivatedRoute, private headerService: HeaderService){
  }
  
  fixture_id ;
  homeTeamLogo ;
  awayTeamLogo  ;
  awayTeamName ;
  homeTeamName  ;
  goalsHomeTeam ;
  goalsAwayTeam  ;
  elapsed ;

  ngOnInit(){
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
    }).catch(err => {
      console.log('something went wrong')
    })
  }

}
