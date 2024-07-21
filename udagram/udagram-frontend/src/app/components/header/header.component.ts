import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {merge} from 'rxjs'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Output() userInfo = new EventEmitter();
  mode = 'home';
  selected = 'none';
  formLogin!: FormGroup;
  formSingin!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      emailLogin: ['', [Validators.required, Validators.email]],
      passwordLogin: ['', [Validators.required]],
    });

    this.formSingin = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      emailSignin: ['', [Validators.required, Validators.email]],
      passwordSignin: ['', [Validators.required]],
    });
  }
  

  loginMode() {
    this.mode = 'login';
  };

  signInMode() {  
    this.mode = 'signin';
  }

  homwMode() {
    this.selected = 'none';
    this.mode = 'home';
  } 
  
  get emailLogin() {
    return this.formLogin.get('emailLogin');
  }
  get passwordLogin() {
    return this.formLogin.get('password');
  }

  get emailSignin() {
    return this.formSingin.get('emailSignin');
  }

  get passwordSignin() {
    return this.formSingin.get('passwordSignin');
  }
  
  get userName() {
    return this.formSingin.get('userName');
  }

  async onSubmitLogin() {
    // Stop if the form is invalid
    if (this.formLogin.invalid) {
      return;
    }
    const element = document.getElementById('main') as HTMLElement;
    element.style.display = 'none';

    this.auth.login(
        this.formLogin.controls['emailLogin'].value,
        this.formLogin.controls['passwordLogin'].value
    )
    .then((user) => {
        console.log('user', user);

        // redirect to course page
        this.router.navigate(['course']);
    })
    .catch((e:any) => {
      throw e.statusText;
    });


  }


  onSubmitSignin() {
    // Stop if the form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    const element = document.getElementById('main') as HTMLElement;
    element.style.display = 'none';

    //this.userInfo.emit(this.form.value);
  }
  
}
