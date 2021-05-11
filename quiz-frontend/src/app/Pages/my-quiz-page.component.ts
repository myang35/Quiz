import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { AppService } from '../Services/app.service';
import { Quiz } from '../types';

@Component({
    templateUrl: './my-quiz-page.component.html'
})
export class MyQuizComponent {
    quizzes: Quiz[] = [];
    selectedQuiz: Quiz = {};
    inputValue = '';

    constructor(private app: AppService, private api: ApiService) {}

    ngOnInit() {
        this.api.getQuizzes().subscribe(res => {
            this.quizzes = res;
            console.log("Get Quizzes");
        });
        this.app.setTitle("My Quiz");
    }

    postQuiz(quiz: Quiz) {
        this.api.postQuiz(quiz);
    }

    putQuiz(quiz: Quiz) {
        this.selectedQuiz.title = this.inputValue;
        this.api.putQuiz(quiz);
    }

    newQuiz() {
        this.selectedQuiz = {};
        this.inputValue = '';
    }

    selectQuiz(quiz: Quiz) {
        this.selectedQuiz = quiz;
        this.inputValue = this.selectedQuiz.title ?? '';
    }
    
}