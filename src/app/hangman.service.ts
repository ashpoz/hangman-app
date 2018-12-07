import { Injectable } from '@angular/core';
import { words, alphabet } from './words';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {
  // title = 'hangman-app';
  // selectedLetter = '';
  // maxTries = 5;

  // currentWord = '';
  // currentWordLetters;

  getWords(): Observable<any[]> {
    return of(words);
  }

  // 2. Draw the blanks
  // pickWord() {
  //   this.currentWord = this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
  //   this.currentWordLetters = this.currentWord.split('');
  // }

  // checkGuess(arr, val) {
  //   return arr.indexOf(val) > -1;
  // }

  // selectLetter(event: any) {
  //   this.selectedLetter = event.target.textContent.toUpperCase();
  //   if (this.checkGuess(this.currentWordLetters, this.selectedLetter)) {
  //     // make letter visible
  //   } else {
  //     this.maxTries--;
  //   }
  //   if (this.maxTries === 0) {
  //     this.maxTries = 5;
  //     this.pickWord();
  //   }
  //   console.log(this.maxTries);
  // }

  constructor() {
  }
}
