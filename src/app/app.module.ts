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
import {HttpClientModule} from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';

const appRoutes: Routes = [
  { path: 'fixture/:fixture_id', component: AppComponent },
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkComponent,
    MainPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [LinkService,HeaderService],
  exports: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
