import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { AppService } from '../Services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../types';

@Component({
    templateUrl: './question-page.component.html'
})
export class QuestionComponent {
    questions?: Question[];
    question: Question = {};
    quizId: number = 0;

    constructor(private app: AppService, private api: ApiService, private route: ActivatedRoute) {
        this.app.setTitle("Question");
    }

    ngOnInit() {
        this.quizId = parseInt(""+this.route.snapshot.paramMap.get('quizId'));
        if (this.quizId) {
            this.api.questionSelected.subscribe(question => this.question = question);
            this.api.getQuestions(this.quizId).subscribe(res => {
                this.questions = res
            });
        }
    }
    
    post(question: Question) {
        question.quizId = this.quizId;
        this.api.postQuestion(question);
    }

    put(question: Question) {
        this.api.putQuestion(question);
    }

    selectQuestion(question: Question) {
        this.api.selectQuestion(question);
    }
}