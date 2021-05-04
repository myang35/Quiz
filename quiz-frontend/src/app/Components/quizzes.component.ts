import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Quiz } from '../types';

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {
    quizzes: Quiz[] = [];

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.getQuizzes().subscribe(res => {
            this.quizzes = res;
            console.log("Get Quizzes");
        })
    }

    selectQuiz(quiz: Quiz) {
        this.api.selectQuiz(quiz);
    }
}