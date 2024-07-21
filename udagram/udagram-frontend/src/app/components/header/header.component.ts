import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {merge} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Output() userInfo = new EventEmitter();
  mode = 'home';

  loginMode() {
    this.mode = 'login';
  };

  signInMode() {  
    this.mode = 'signin';
  }

  homwMode() {
    this.mode = 'home';
  }

  formLogin!: FormGroup;
  formSingin!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

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

  onSubmitLogin() {
    // Stop if the form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    //this.userInfo.emit(this.form.value);
  }

  onSubmitSignin() {
    // Stop if the form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    //this.userInfo.emit(this.form.value);
  }
  
}
