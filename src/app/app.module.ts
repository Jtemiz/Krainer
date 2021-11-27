import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from "./sites/home/home.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './sites/about/about.component';
import { OffersComponent } from './sites/offers/offers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import { SheepInfoComponent } from './sites/sheep-info/sheep-info.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { ServiceComponent } from './sites/service/service.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OffersComponent,
    SheepInfoComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent, OffersComponent, AboutComponent, HomeComponent]
})
export class AppModule { }


