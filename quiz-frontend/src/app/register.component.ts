import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { AppService } from './app.service';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    form: any;

    constructor(private app: AppService, private auth: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.app.setTitle("Register");
    }

    register(credentials: any) {
        this.auth.register(credentials);
    }
}