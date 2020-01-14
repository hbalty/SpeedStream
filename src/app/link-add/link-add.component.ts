import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiGatewayService } from '../api-gateway.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-link-add',
  templateUrl: './link-add.component.html',
  styleUrls: ['./link-add.component.css']
})
export class LinkAddComponent implements OnInit {
  @Input() fixture_id;
  linkForm = new FormGroup({
    url: new FormControl('', 
    [Validators.minLength(5)]),
    provider: new FormControl('',
    [Validators.minLength(5)]),
    compatibility: new FormGroup({
      phone: new FormControl(true),
      tablet: new FormControl(true),
      pc: new FormControl(true)
    })
  });


  constructor(private apiGateway: ApiGatewayService,private modalService: NgbModal) { }

  get url() { return this.linkForm.get('url'); }
  
  get provider() { return this.linkForm.get('provider'); }

  get compatibility() { return this.linkForm.get('provider'); }

  onSubmit() {
    const link = this.linkForm.value ;
    link.fixture_id = this.fixture_id;
    this.apiGateway.addLink(link).then(data => {
      this.modalService.dismissAll();
    });
  }

  doUpdateProvider(){
    let regex = '.*([^\.]+)(com|net|org|info|coop|int|co\.uk|org\.uk|ac\.uk|uk|__and so on__)$';
    let pattern = new RegExp(regex);
    let matches = this.url.value.match(pattern);
    console.log(matches)
    if (matches){
      this.linkForm.patchValue({provider: matches[0]})
    } 
  }
  ngOnInit() {
    this.apiGateway.getFixture(this.fixture_id).then((data) => {
    });
  }

}
