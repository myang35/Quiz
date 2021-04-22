import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {
    quiz = {} as any;
    quizzes: any;

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.getQuizzes().subscribe(res => {
            this.quizzes = res;
            console.log("Get Quizzes");
        })
    }

    selectQuiz(quiz: any) {
        this.api.selectQuiz(quiz);
    }
}