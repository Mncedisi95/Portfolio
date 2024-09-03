import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [

    {
      path:'navbar-component', component:NavbarComponent
    },
    {
        path:'index', component:IndexComponent
    }
];
