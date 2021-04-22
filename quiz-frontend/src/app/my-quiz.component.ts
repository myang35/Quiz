import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    template: "<quiz></quiz>"
})
export class MyQuizComponent {

    constructor(private app: AppService) {
        this.app.setTitle("My Quiz");
    }
}