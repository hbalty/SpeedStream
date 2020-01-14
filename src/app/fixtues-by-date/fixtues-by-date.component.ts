import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';
import {NgbDateStruct, NgbCalendar,NgbDateParserFormatter, NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fixtues-by-date',
  templateUrl: './fixtues-by-date.component.html',
  styleUrls: ['./fixtues-by-date.component.css']
})
export class FixtuesByDateComponent implements OnInit {
  date ; 
  private date_struct: NgbDateStruct;
  private model: NgbDateStruct;
  fixtures; 

  constructor(private apiGateway: ApiGatewayService, private calendar : NgbCalendar) {
    this.date = (new Date()).toISOString().substr(0,10)
    
  }

  doUpdate(event){
    const dateNew = new NgbDate(event.year, event.month, event.day);
    this.reload(event.year + '-' + event.month + '-' + event.day)
  
  }

  reload(date){
    this.apiGateway.getFixturesByDate(date).then((response) => {
      this.fixtures = response.message;
    }).catch(err => {
      console.log(err)
    })
  }

  ngOnInit() {
    this.apiGateway.getFixturesByDate(this.date).then(res => {
      this.fixtures =  res.message ; 
    }).catch(err => 
      console.log(err)
    )
  }

}
