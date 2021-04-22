import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AppService } from './app.service';

@Component({
    selector: 'play',
    templateUrl: './play.component.html'
})
export class PlayComponent {

    quizzes: any
    

    constructor(private app: AppService, private api: ApiService) {
        this.app.setTitle("Play");
    }

    ngOnInit() {
        this.api.getAllQuizzes().subscribe(res => {
            this.quizzes = res;
        })
    }

    selectQuiz(quiz: any) {
        this.api.selectQuiz(quiz);
    }

}