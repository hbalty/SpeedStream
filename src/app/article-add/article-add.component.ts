import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiGatewayService } from '../api-gateway.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  articleForm = new FormGroup({
    title: new FormControl(''),
    picture_link: new FormControl(''),
    caption: new FormControl(''),
    url: new FormControl(''),
    language: new FormControl('FR'),
    source: new FormControl(''),
    isLive: new FormControl(''),
  });

  constructor(private apigateway: ApiGatewayService) { }


  onSubmit() {
    const metadata = {
      scrapping_date : new Date()
    };
    const article = this.articleForm.value;
    article.metadata = metadata;
    this.apigateway.addArticle(article).then(response => {
      console.log(response) ;
    });
  }

  ngOnInit() {
  }

}
