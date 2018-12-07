import { Component, OnInit, Input } from '@angular/core';
import { words, alphabet, maxTries } from '../words';
import { HangmanService } from '../hangman.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-hangman-word',
  templateUrl: './hangman-word.component.html',
  styleUrls: ['./hangman-word.component.scss'],
  providers: [HangmanService]
})
export class HangmanWordComponent implements OnInit {

  // input array from app component to this component
  @Input() currentWordLetters: string[];

  alphabet = alphabet;
  words = words;
  maxTries = maxTries;
  isMaxTries;

  title = 'hangman-app';
  selectedLetter = '';
  // maxTries = 6;
  letterEls;
  matchedLetter;

  currentWord = '';
  // currentWordLetters;

  // Trying to use a toggle *ngIf when showing maxTries number
  showIsTrue: true;

  getWords(): void {
    this.hangmanService.getWords()
        .subscribe(any => this.words = words);
  }

  pickWord() {
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
    this.currentWordLetters = this.currentWord.split('');
    this.letterEls = document.querySelectorAll('.hangman_letter');

    for (let i = 0; i < this.letterEls.length; i++) {
      this.matchedLetter = this.letterEls[i];
      this.matchedLetter.style.visibility = 'hidden';
      this.matchedLetter.style.opacity = 0;
    }
  }

  checkGuess(arr, val) {
    return arr.indexOf(val) > -1;
  }

  // @param val: element

  showGuess(val) {
    for (let i = 0; i < this.letterEls.length; i++) {
      this.matchedLetter = this.letterEls[i];
      this.matchedLetter.style.visibility = 'visible';
      if (this.letterEls[i].textContent === val) {
        this.matchedLetter.style.opacity = 1;
      }
    }
  }

  getIndexes(arrEl, arrIndex) {
    return arrEl === this.selectedLetter ? arrIndex : null;
  }

  selectLetter(event: any) {
    this.selectedLetter = event.target.textContent.toUpperCase();
    if (this.checkGuess(this.currentWordLetters, this.selectedLetter)) {
      // Look thru letter elements for a match
      this.letterEls = document.querySelectorAll('.hangman_letter');
      this.showGuess(this.selectedLetter);
    } else {
      this.maxTries--;
    }
    if (this.maxTries === 0) {
      this.maxTries = 6;
      this.pickWord();
      this.letterEls = document.querySelectorAll('.hangman_letter');
    }
    console.log(this.maxTries);
  }

  constructor(private hangmanService: HangmanService) { }


  ngOnInit(): void {
    this.getWords();
    this.pickWord();
  // 3. Take in user input
    // - IF correct, fill in blank
    // - IF incorrect, deduct point
  }
  // 4. Stop function if amount of tries are up
  // OR if all blanks are complete


}
