import {Component} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {NgIf} from '@angular/common';
import {MatError, MatFormField, MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IdentityService} from '../../services/identity.service';
import {Router, RouterLink} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Login} from '../../modal/Login';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardContent,
    MatError,
    MatFormField,
    NgIf,
    MatInput,
    MatButton,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private identityService: IdentityService,
              private router: Router,
              private matSnackBar: MatSnackBar) {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  formGroup: FormGroup;
  loginInvalid: boolean = false;

  onRegister(): void {
    this.router.navigate(['/register']).then();
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      let login = new Login();
      login.username = this.formGroup.controls['username'].value;
      login.password = this.formGroup.controls['password'].value;
      if (login.username !== '' && login.password !== '') {
        this.identityService.verifyUser(login)
          .subscribe(value => {
            if (value.token !== '' && value.token !== null && value.token !== undefined) {
              this.identityService.storeUserInfo(login, value.token)
                .subscribe((updated) => {
                  if (updated) {
                    this.router.navigate(['/']).then(() => {
                      AppComponent.isAuthenticated = true;
                      window.location.reload();
                    });
                  }
                });
            } else {
              this.matSnackBar.open("Login Failed", 'Dismiss', {
                duration: 2000,
              });
            }
          });
      }
    }
  }

}

