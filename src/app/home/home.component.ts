import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @ViewChild('cmd') cmd: ElementRef;

  private sentenceIndex = 0;
  private index = 0;
  private pause = 0;
  private texts: string[] = [
    'Hello and welcome!',
    'My name is Emil Sunesson',
    'Im a developer with a passion for programming <3'
  ];

  constructor() {
  }

  ngOnInit() {
    let subscription = Observable.interval(50).subscribe(it => {

      if (this.sentenceIndex >= this.texts.length) {
        subscription.unsubscribe();
      } else {
        if (this.pause > 0) {
          this.pause--;
        } else {
          this.write();
        }
      }
    });
  }

  private write() {

    if (this.index === 0) {
      this.cmd.nativeElement.appendChild(document.createElement('br'));
      this.cmd.nativeElement.appendChild(document.createElement('br'));
    }

    let sentence = this.texts[this.sentenceIndex];

    if (sentence) {
      this.cmd.nativeElement.innerHTML += sentence[this.index];
      this.index++;

      if (sentence.length === this.index) {
        this.index = 0;
        this.pause = 20;
        this.sentenceIndex++;
      }
    }
  }

}
