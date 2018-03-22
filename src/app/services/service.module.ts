import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UploadModalService } from '../custom-components/upload-modal/upload-modal.service';

import {
  SettingsService,
  SharedService,
  SidebarService,
  UserService,
  LoginGuardGuard,
  UploadFileService,
  PruebasService,
  ResultService
} from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UserService,
    LoginGuardGuard,
    UploadFileService,
    PruebasService,
    UploadModalService,
    ResultService
  ],
  declarations: []
})

export class ServiceModule { }
