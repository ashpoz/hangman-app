import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanWordComponent } from './hangman-word.component';

describe('HangmanWordComponent', () => {
  let component: HangmanWordComponent;
  let fixture: ComponentFixture<HangmanWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
