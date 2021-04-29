import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { AppService } from '../Services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './question-page.component.html'
})
export class QuestionComponent {
    question = {} as any;
    quizId: number = 0;

    constructor(private app: AppService, private api: ApiService, private route: ActivatedRoute) {
        this.app.setTitle("Question");
    }

    ngOnInit() {
        this.quizId = parseInt(""+this.route.snapshot.paramMap.get('quizId'));
        if (this.quizId) {
            this.api.questionSelected.subscribe(question => this.question = question);
        }
    }
    
    post(question: any) {
        question.quizId = this.quizId;
        this.api.postQuestion(question);
    }

    put(question: any) {
        this.api.putQuestion(question);
    }
}