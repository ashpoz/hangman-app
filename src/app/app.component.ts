import { Component, OnInit } from '@angular/core';
import { words, alphabet } from './words';
import { HangmanService } from './hangman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HangmanService]
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
  }

}
