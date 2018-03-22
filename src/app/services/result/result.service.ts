import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from '../uses/user.service';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class ResultService {
  url = URL_SERVICES;
  token: string;
  constructor(
    public _http: HttpClient,
    public _router: Router,
    public _usrSer: UserService
  ) { }

  getData() {
    let headers = new HttpHeaders({'Authorization': this._usrSer.token});
    return this._http.get(this.url + '/resultado', {headers});
  }
}
