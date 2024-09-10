import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  {
    path:'', redirectTo:'index', pathMatch:'full'
  },
  {
    path:'index', component:IndexComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
     path:'portfolio', component:PortfolioComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {

     path:'**', component:PagenotfoundComponent
  },
 ];
