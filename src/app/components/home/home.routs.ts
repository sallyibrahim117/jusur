import { Routes } from '@angular/router';



export const homeChildrenRoutes: Routes = [
  {
    path: '',
    redirectTo: 'statistics',
    pathMatch: 'full',
  },
  {
    path: 'statistics',
    loadComponent: () => import('./components/statistics/statistics.component').then(c => c.StatisticsComponent),
  }
]
