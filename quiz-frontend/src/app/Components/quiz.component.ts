import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {
    quiz = {} as any

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.quizSelected.subscribe(res => {
            this.quiz = res;
        })
    }

    postQuiz(quiz: any) {
        this.api.postQuiz(quiz);
    }

    putQuiz(quiz: any) {
        this.api.putQuiz(quiz);
    }
    
}