import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../uses/user.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(
    public _userSer: UserService,
    public _router: Router
  ) {  }

  canActivate() {
    // this._userSer.loadStoge();
    if ( this._userSer.isLogin() ) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
