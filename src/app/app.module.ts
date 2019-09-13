import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LinkComponent } from './link.component';
import { LinkService } from './link.service';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { MainPageComponent } from './mainpage.component';
import { HeaderService } from './header.service';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { LiveService } from './live-matches.service';
import { LiveComponent } from './live-matches.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LinkAddComponent } from './link-add/link-add.component';
import { ApiGatewayService } from './api-gateway.service';
import { LinkListComponent } from './link-list/link-list.component';
import { ExerptPipe } from './exerpt.pipe';
import { NewsComponent } from './news/news.component';
import { ArticleAddComponent } from './article-add/article-add.component';


const appRoutes: Routes = [
  { path: 'fixture/:fixture_id', component: AppComponent },
  { path: 'admin/live', component: LiveComponent },
  { path: 'admin/news', component: NewsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkComponent,
    MainPageComponent,
    NotFoundComponent,
    LiveComponent,
    LinkAddComponent,
    LinkListComponent,
    ExerptPipe,
    NewsComponent,
    ArticleAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [LinkService, HeaderService, LiveService, NgbModal,ApiGatewayService],
  exports: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
