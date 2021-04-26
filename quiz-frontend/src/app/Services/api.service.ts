import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    getQuestions(quizId: any) {
        return this.http.get(`http://localhost:5001/api/questions/${quizId}`);
    }

    postQuestion(question: any) {
        this.http.post('http://localhost:5001/api/questions', question).subscribe(res => {
            console.log(res);
        })
    }

    putQuestion(question: any) {
        this.http.put(`http://localhost:5001/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        })
    }

    selectQuestion(question: any) {
        this.selectedQuestion.next(question);
    }

    postQuiz(quiz: any) {
        return this.http.post('http://localhost:5001/api/quizzes', quiz).subscribe(res => {
            console.log(res);
        })
    }

    getQuizzes() {
        return this.http.get('http://localhost:5001/api/quizzes');
    }

    getAllQuizzes() {
        return this.http.get('http://localhost:5001/api/quizzes/all');
    }

    selectQuiz(quiz: any) {
        this.selectedQuiz.next(quiz);
    }

    putQuiz(quiz: any) {
        this.http.put(`http://localhost:5001/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        })
    }
}