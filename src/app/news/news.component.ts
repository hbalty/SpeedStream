import { Component, OnInit, ViewChild, AfterViewInit, Output, Input } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private news; 
  private message; 
  
  articleForm = new FormGroup({
    _id: new FormControl(),
    title: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    picture_link: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    caption: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    url: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    language: new FormControl('FR'),
    source: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    isLive: new FormControl(false),
  });
 
  constructor(private apigateway: ApiGatewayService, private modalService: NgbModal) { 
    
  }

  get url() { return this.articleForm.get('url')}

  get picture_link() { return this.articleForm.get('picture_link')}
  
  get source() { return this.articleForm.get('source')}

  get title() { return this.articleForm.get('title')}

  get caption() { return this.articleForm.get('caption')}
  
  
  deleteArticle(id){
    this.apigateway.deleteArticle(id).then(reponse => {
      this.message = 'Article deleted with success'
      this.reloadNews();
    })
  }

  onUpdate(content, id){
    this.apigateway.getArticle(id).then(res => {
      this.articleForm.patchValue(res)
      this.modalService.open(content).result.then((result) => {
        console.log(result);
      }, (reason) => {
        this.articleForm.reset()
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  doSubmit($event){
    console.log($event)
  }

  onSubmit($event) {
    $event.preventDefault();
    const metadata = {
      scrapping_date : new Date()
    };
    if (this.articleForm.valid){
      let article = this.articleForm.value;
      article.metadata = metadata;
      this.apigateway.addArticle(article).then(response => {
        if (response.code === 200){
          this.message = 'updated with success'
        }
        this.doDismiss(true)
    });
    } else {
      console.log('else')
    }
  }


  
  doDismiss(dismiss: boolean){
    if (dismiss){
      this.modalService.dismissAll();
      this.reloadNews();
    }
      
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      
    }, (reason) => {
      console.log(reason)
    });
  }
  
  reloadNews(){
    this.apigateway.getNews().then((news) => {
      console.log(news)
      const n = Object.keys(news.articles).map(key => news.articles[key]);
      this.news = n;
    }).catch(err => {
      alert('contact me for help')
    });
  }
  
  ngOnInit() {
      this.reloadNews();
  }
  
}
