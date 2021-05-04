import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Question, Quiz } from '../types';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<Question>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<Quiz>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    getQuestions(quizId: string | number): Observable<Question[]> {
        return this.http.get<Question[]>(`http://localhost:5001/api/questions/${quizId}`);
    }

    postQuestion(question: Question) {
        this.http.post('http://localhost:5001/api/questions', question).subscribe(res => {
            console.log(res);
        })
    }

    putQuestion(question: Question) {
        this.http.put(`http://localhost:5001/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        })
    }

    selectQuestion(question: Question) {
        this.selectedQuestion.next(question);
    }

    postQuiz(quiz: Quiz) {
        return this.http.post('http://localhost:5001/api/quizzes', quiz).subscribe(res => {
            console.log(res);
        })
    }

    getQuizzes(): Observable<Quiz[]> {
        return this.http.get<Quiz[]>('http://localhost:5001/api/quizzes');
    }

    getAllQuizzes(): Observable<Quiz[]> {
        return this.http.get<Quiz[]>('http://localhost:5001/api/quizzes/all');
    }

    selectQuiz(quiz: Quiz) {
        this.selectedQuiz.next(quiz);
    }

    putQuiz(quiz: Quiz) {
        this.http.put(`http://localhost:5001/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        })
    }
}