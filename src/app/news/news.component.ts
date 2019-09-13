import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private news;
  constructor(private apigateway: ApiGatewayService, private modalService: NgbModal) { }



  deleteArticle(id){
    this.apigateway.deleteArticle(id).then(reponse => {
      console.log(reponse)
    })
  }

open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
}

  ngOnInit() {
    this.apigateway.getNews().then((news) => {
      const n = Object.keys(news).map(key => news[key]);
      this.news = n;
    }).catch(err => {
      alert('contact me for help')
    });
  }

}
