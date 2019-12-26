import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MessagesComponent } from './messages/messages.component';
// ...
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LoginComponent,
    HomeComponent,
    AppHeaderComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // Add this import here
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['intense-tor-13648.herokuapp.com'],
        blacklistedRoutes: ['intense-tor-13648.herokuapp.com/auth']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
