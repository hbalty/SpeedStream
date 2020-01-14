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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LinkAddComponent } from './link-add/link-add.component';
import { ApiGatewayService } from './api-gateway.service';
import { LinkListComponent } from './link-list/link-list.component';
import { ExerptPipe } from './exerpt.pipe';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { JwtModule } from "@auth0/angular-jwt";
import { NavbarComponent } from './navbar/navbar.component';
import { FixtuesByDateComponent } from './fixtues-by-date/fixtues-by-date.component';

const appRoutes: Routes = [
  { path: 'admin', component: HomeComponent, canActivate: [AuthGuard], 
  children: [] },
  { path: 'fixture/:fixture_id', component: AppComponent }, 
  { path: 'admin/live', component: LiveComponent, canActivate: [AuthGuard] },
  { path: 'admin/news', component: NewsComponent, canActivate: [AuthGuard] },
  { path: 'admin/fixtures', component: FixtuesByDateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent }
];

/**
 * JWT token getter 
 */
export function adminTokenGetter(){
  return localStorage.getItem('admin_access_token');
}

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
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FixtuesByDateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: adminTokenGetter,
      }
    })

  ],
  providers: [LinkService, HeaderService, LiveService, NgbModal,ApiGatewayService],
  exports: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
