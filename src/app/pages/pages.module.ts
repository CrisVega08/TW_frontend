import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Temporal
import { IncrementComponent } from '../custom-components/increment/increment.component';
import { ChartDonaComponent } from '../custom-components/chart-dona/chart-dona.component';
import { PromesisComponent } from './promesis/promesis.component';
import { PruebaComponent } from './pruebas/prueba.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UploadModalComponent } from '../custom-components/upload-modal/upload-modal.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    IncrementComponent,
    ChartDonaComponent,
    AccountSettingsComponent,
    PromesisComponent,
    PruebaComponent,
    ProfileComponent,
    UsuariosComponent,
    UploadModalComponent
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule
  ]
})
export class PagesModule { }
