import { Routes } from '@angular/router';
import {HomeComponent} from './app.home/home.component';
import {UserComponent} from './app.user/user.components';

export const routes: Routes = [
    
        {
          path: '',
          title: 'App Home Page',
          component: HomeComponent,
        },
        {
          path: 'user',
          title: 'App User Page',
          component: UserComponent,
        },
];
