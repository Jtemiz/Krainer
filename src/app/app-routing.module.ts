import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./sites/home/home.component";
import {AboutComponent} from "./sites/about/about.component";
import {OffersComponent} from "./sites/offers/offers.component";
import {SheepInfoComponent} from "./sites/sheep-info/sheep-info.component";
import { ServiceComponent } from './sites/service/service.component';

const routes: Routes = [
//  { path: '', component: HomeComponent },
//  { path: 'aboutus', component: AboutComponent},
 // { path: 'articles', component: OffersComponent},
//  { path: 'info', component: SheepInfoComponent}
  {path: '', component: ServiceComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})



export class AppRoutingModule {
}
