import { Component, OnInit, Input } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  @Input() fixture_id ;
  private links ;
  private selected = [];
  constructor(private apigateway: ApiGatewayService, private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
      this.apigateway.getLinks(this.fixture_id).then((links) => {
        this.links = links.results ;
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
