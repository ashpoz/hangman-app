import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanWordComponent } from './hangman-word/hangman-word.component';

const appRoutes: Routes = [
  { path: 'hangman', component: HangmanWordComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ],
})
export class AppRoutingModule { }
