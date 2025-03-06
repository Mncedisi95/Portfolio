import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { Component } from '@angular/core';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [

  // set up all routes
  {path: 'index', component:IndexComponent},
  {path: 'about', component:AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'projects', component:PortfolioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'project-details', component: ProjectDetailsComponent},
  {path: '', redirectTo:'/index', pathMatch: 'full'},
  {path: '**', component:PagenotfoundComponent}
];
