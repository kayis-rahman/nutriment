import {Component} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatError, MatFormField, MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IdentityService} from '../../services/identity.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Register} from '../../modal/Register';

@Component({
  selector: 'app-register',
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatButton,
    FormsModule,
    MatError,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private identityService: IdentityService,
              private router: Router,
              private matSnackBar: MatSnackBar) {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  formGroup: FormGroup;
  loginInvalid: boolean = false;

  onLogin(): void {
    this.router.navigate(['/login']).then();
  }

  onRegister(): void {
    let register = new Register();
    register.username = this.formGroup.controls['username'].value;
    register.password = this.formGroup.controls['password'].value;
    register.email = this.formGroup.controls['email'].value;

    this.identityService.register(register)
      .subscribe(value => {
        if (value) {
          this.matSnackBar.open("Registration Successful", 'Dismiss', {
            duration: 2000,
          });
          this.router.navigate(['/login']).then();
        } else {
          this.matSnackBar.open("Registration Failed", 'Dismiss', {
            duration: 2000,
          });
        }
      });

  }
}
