import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './Pages/question-page.component';
import { RegisterComponent } from './Pages/register-page.component';
import { LoginComponent } from './Pages/login-page.component';
import { PlayComponent } from './Pages/play-page.component';
import { PlayQuizComponent } from './Pages/play-quiz-page.component';
import { MyQuizComponent } from './Pages/my-quiz-page.component';

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
