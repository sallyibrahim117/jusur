import { Routes } from '@angular/router';
import { authChildrenRoutes } from './components/auth/auth.routes';
import { homeChildrenRoutes } from './components/home/home.routs';


export const routes: Routes = [
  {
    path:"",
    redirectTo:"/auth/login",
    pathMatch:'full'
  }
  ,
  {
    path: 'auth',
    loadComponent: () => import('./components/auth/auth.component').then(c => c.AuthComponent),
children:  authChildrenRoutes

  },
  {
    path:'home',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
children:homeChildrenRoutes
  }
];
