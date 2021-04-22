import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { PlayComponent } from './play.component';
import { PlayQuizComponent } from './play-quiz.component';
import { MyQuizComponent } from './my-quiz.component';

const routes: Routes = [
  {path: '', component: PlayComponent},
  {path: 'question/:quizId', component: QuestionComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'play-quiz/:quizId', component: PlayQuizComponent},
  {path: 'my-quiz', component: MyQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
