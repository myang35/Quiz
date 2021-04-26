import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { AppService } from '../Services/app.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    form: any;

    constructor(private app: AppService, private auth: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.app.setTitle("Login");
    }

    login(credentials: any) {
        this.auth.login(credentials);
    }

}