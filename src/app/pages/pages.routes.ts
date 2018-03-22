import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesisComponent } from './promesis/promesis.component';
import { PruebaComponent } from './pruebas/prueba.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'graficas1', component: Graficas1Component, data: { title: 'Gráficas'} },
      { path: 'promise', component: PromesisComponent, data: { title: 'Resultados'} },
      { path: 'prueba', component: PruebaComponent, data: { title: 'Pruebas'} },
      { path: 'account-setting', component: AccountSettingsComponent, data: { title: 'Configuración de cuenta'} },
      { path: 'profile', component: ProfileComponent, data: { title: 'Perfil'} },
      { path: 'usuarios', component: UsuariosComponent, data: { title: 'Mantenimiento Usuarios'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );