import { Injectable } from '@angular/core';
import {IdentityService} from './identity.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private identityService: IdentityService,
              private router: Router) { }

  canActivate(): boolean {
    if (!this.identityService.isAuthenticated()) {
      this.router.navigate(['login']).then();
      return false;
    }
    return true;
  }
}
