import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../types';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {
    questions?: Question[];

    constructor(private api: ApiService, private route: ActivatedRoute) {}

    ngOnInit() {
        var quizId = this.route.snapshot.paramMap.get('quizId');
        if (quizId != null) {
            this.api.getQuestions(quizId).subscribe(res => {
                this.questions = res
            });
        }
    }

    selectQuestion(question: Question) {
        this.api.selectQuestion(question);
    }
}