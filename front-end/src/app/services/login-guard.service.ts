import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {IdentityService} from './identity.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private identityService: IdentityService,
              private router: Router) { }

  canActivate(): boolean {
    if (this.identityService.isAuthenticated()) {
      this.router.navigate(['']).then();
      return false;
    }
    return true;
  }
}
