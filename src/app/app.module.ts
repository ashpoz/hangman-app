import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HangmanWordComponent } from './hangman-word/hangman-word.component';
import { HangmanService } from './hangman.service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HangmanWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HangmanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
