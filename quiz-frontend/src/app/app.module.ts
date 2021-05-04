import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './Pages/question-page.component';
import { ApiService } from './Services/api.service';
import { QuestionsComponent } from './Components/questions.component';
import { PageHeaderComponent } from './Components/page-header.component';
import { QuizComponent } from './Components/quiz.component';
import { QuizzesComponent } from './Components/quizzes.component';
import { RegisterComponent } from './Pages/register-page.component';
import { AuthService } from './Services/auth.service';
import { AuthInterceptor } from './Services/auth.interceptor';
import { LoginComponent } from './Pages/login-page.component';
import { PlayComponent } from './Pages/play-page.component';
import { PlayQuizComponent } from './Pages/play-quiz-page.component';
import { FinishedComponent } from './Components/finished.component';
import { MyQuizComponent } from './Pages/my-quiz-page.component';
import { AppService } from './Services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    PageHeaderComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent,
    MyQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [AppService, ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
