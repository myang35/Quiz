import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {
    question = {} as any;
    questions: any

    constructor(private api: ApiService, private route: ActivatedRoute) {}

    ngOnInit() {
        var quizId  = this.route.snapshot.paramMap.get('quizId');
        this.api.getQuestions(quizId).subscribe(res => {
            this.questions = res
        });
    }

    post(question: any) {
        this.api.postQuestion(question);
    }

    selectQuestion(question: any) {
        this.api.selectQuestion(question);
    }
}