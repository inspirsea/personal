import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  @ViewChild('cmd') cmd: ElementRef;

  private index = 0;
  private text = "testing the typewriter";

  constructor() {
  }

  ngOnInit() {
    let subscription = Observable.interval(100).subscribe(it => {
      if(this.index == this.text.length) {
        subscription.unsubscribe();
      } else {
        this.write();
      }
    });
  }

  private write() {
    this.cmd.nativeElement.innerText += this.text[this.index];
    this.index++;
  }

}
