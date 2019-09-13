import { Component, OnInit, Input } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  @Input() fixture_id ;
  private links ;
  private selected = [];

  constructor(private apigateway: ApiGatewayService) { }

  ngOnInit() {
      this.apigateway.getLinks(this.fixture_id).then((links) => {
        console.log(links);
        this.links = links ;
      }).catch((err) => {
        console.log('balti says there is an error');
      });
  }


  deleteLink(link_id) {
    this.apigateway.deleteLink(link_id).then((response) => {
      alert('deleted')
    });
  }

}
