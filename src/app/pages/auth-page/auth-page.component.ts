import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  authToggle = false;
  isRegister = false;

  form: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
    this.form = this.fb.group({
      login: new FormControl('', [Validators.required, this.NoSpaceAllowed]),
      password: new FormControl('', [Validators.required, this.NoSpaceAllowed]),
    })
    // this.registrationForm = this.fb.group({
    //   login: new FormControl('', [Validators.required, this.NoSpaceAllowed]),
    //   password: new FormControl('', [Validators.required, this.NoSpaceAllowed]),
    // })
  }

  ngOnInit(): void {
  }

  onSubmit(user: User) {
    if (this.isRegister) this.service.createUser(user).subscribe(() => this.router.navigate(['tasks']))
    else this.service.loginUser(user).subscribe(() => this.router.navigate(['tasks']))
  }

  NoSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }
    return null;
  }
}
