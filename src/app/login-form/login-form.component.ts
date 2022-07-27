import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['../app.component.scss','./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  public formHeading = 'Please Login to proceed:';
    public loginForm: FormGroup;
  
    constructor(private fb: FormBuilder, private router: Router) {}
    ngOnInit() {
      this.createLoginForm();
    }
    private createLoginForm() {
      this.loginForm = this.fb.group({
        emailId: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8)]]
      });
    }
    public onButtonSubmit() {
      if(this.loginForm.valid) {
        this.router.navigate(['reactiveFormComponent']);
      } else {
        alert('Invalid Form');
      }
    }
  }