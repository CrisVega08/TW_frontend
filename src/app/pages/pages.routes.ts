import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesisComponent } from './promesis/promesis.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Conexión'} },
      { path: 'graficas1', component: Graficas1Component, data: { title: 'Gráficas'} },
      { path: 'promise', component: PromesisComponent, data: { title: 'Resultados'} },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Pruebas'} },
      { path: 'account-setting', component: AccountSettingsComponent, data: { title: 'Configuración de cuenta'} },
      { path: 'profile', component: ProfileComponent, data: { title: 'Perfil'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );