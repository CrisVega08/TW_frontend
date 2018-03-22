import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import swal from 'sweetalert2';
import { Prueba } from '../../models/prueba.model';
import { URL_SERVICES } from '../../config/config';
import { UserService } from '../uses/user.service';

@Injectable()
export class PruebasService {
  url = URL_SERVICES;
  prueba: Prueba;
  token: string;
  constructor(
    public _http: HttpClient,
    public _router: Router,
    public _usrSer: UserService
  ) { }

  createTest( prueba: Prueba) {

  }

  getData() {
    let headers = new HttpHeaders({'Authorization': this._usrSer.token});
    return this._http.get(this.url + '/prueba', {headers});
  }
}
