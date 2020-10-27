import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SummaryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'summary', component: SummaryComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
