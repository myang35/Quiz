import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Quiz } from '../types';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {
    quiz: Quiz = {};

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.quizSelected.subscribe(res => {
            this.quiz = res;
        })
    }

    postQuiz(quiz: Quiz) {
        this.api.postQuiz(quiz);
    }

    putQuiz(quiz: Quiz) {
        this.api.putQuiz(quiz);
    }
    
}