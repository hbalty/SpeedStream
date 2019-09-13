import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiGatewayService } from '../api-gateway.service';
@Component({
  selector: 'app-link-add',
  templateUrl: './link-add.component.html',
  styleUrls: ['./link-add.component.css']
})
export class LinkAddComponent implements OnInit {
  @Input() fixture_id;
  linkForm = new FormGroup({
    url: new FormControl(''),
    provider: new FormControl(''),
    compatibility: new FormGroup({
      phone: new FormControl(true),
      tablet: new FormControl(true),
      pc: new FormControl(true)
    })
  });


  constructor(private apiGateway: ApiGatewayService) { }


  onSubmit() {
    const link = this.linkForm.value ;
    link.fixture_id = this.fixture_id;
    this.apiGateway.addLink(link).then(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.apiGateway.getFixture(this.fixture_id).then((data) => {
    });
  }

}
