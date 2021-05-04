import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { AppService } from '../Services/app.service';
import { Quiz } from '../types';

@Component({
    templateUrl: './play-page.component.html'
})
export class PlayComponent {

    displayedColumns: string[] = ['title']
    quizzes: Quiz[] = [];

    constructor(private app: AppService, private api: ApiService) {
        this.app.setTitle("Play");
    }

    ngOnInit() {
        this.api.getAllQuizzes().subscribe(res => {
            this.quizzes = res;
        })
    }

    selectQuiz(quiz: Quiz) {
        this.api.selectQuiz(quiz);
    }

}