import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) {}

    get isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    register(credentials: any) {
        return this.http.post<string>('http://localhost:5001/api/account', credentials).subscribe(res => {
            this.authenticate(res);
        })
    }

    login(credentials: any) {
        return this.http.post<string>('http://localhost:5001/api/account/login', credentials).subscribe(res => {
            this.authenticate(res);
        })
    }

    logout() {
        localStorage.removeItem('token');
    }

    authenticate(res: string) {
        localStorage.setItem('token', res);

        this.router.navigate(['/']);
    }
}