import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { AppService } from '../Services/app.service';

@Component({
    selector: 'page-header',
    templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {
    title = "";

    constructor(private app: AppService, private auth: AuthService) {}

    ngOnInit() {
        this.app.getTitle().subscribe(value => {
            this.title = value;
        })
    }

    get isAuthenticated() {
        return this.auth.isAuthenticated;
    }

    logout() {
        this.auth.logout();
    }

}