import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinishedComponent } from '../Components/finished.component';
import { AppService } from '../Services/app.service';
import { Question, Quiz } from '../types';

@Component({
    templateUrl: './play-quiz-page.component.html'
})
export class PlayQuizComponent {

    quiz: Quiz = {};
    questions: Question[] = [];

    constructor(private app: AppService, private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) {
        this.app.setTitle("Play Quiz");
    }

    ngOnInit() {
        let quizId = this.route.snapshot.paramMap.get('quizId');
        if (quizId == null) {
            console.log("Quiz is null");
            return;
        }

        this.api.getQuestions(quizId).subscribe(res => {
            this.questions = res;

            this.questions.forEach(q => {
                q.answers = [q.correctAnswer ?? 'null', q.answer1 ?? 'null', q.answer2 ?? 'null', q.answer3 ?? 'null'];
                shuffle(q.answers);
            });
        })

        this.api.getQuiz(quizId).subscribe(result => {
            this.quiz = result;
        })
    }

    finish() {
        var correct = 0;
        this.questions.forEach(q => {
            if (q.correctAnswer == q.selectedAnswer) {
                correct++;
            }
        });

        const dialogRef = this.dialog.open(FinishedComponent, {
            data: { correct, total: this.questions.length }
        });
        
        if (this.quiz.playCount) {
            this.quiz.playCount += 1;
        } else {
            this.quiz.playCount = 1;
        }

        this.api.putQuiz(this.quiz).subscribe(result => {
            console.log(result);
        });
    }

    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }
}

function shuffle(a: any) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}