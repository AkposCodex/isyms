import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ResearchComponent } from './research/research.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

/* Ngx-Bootstrap Imports */
import { ModalModule } from 'ngx-bootstrap/modal';

/* Material Design Imports */
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from "@angular/material/badge";

/* ngRx Store Imports */
import { StoreModule } from '@ngrx/store';
import { AdminComponent } from './admin/admin.component';
import { adminReducer } from './store/reducers';
import { ResearchOngoingComponent } from './research-ongoing/research-ongoing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OurTeamComponent,
    ResearchComponent,
    ContactComponent,
    AdminComponent,
    ResearchOngoingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    ReactiveFormsModule,
    StoreModule.forRoot({user: adminReducer}),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
