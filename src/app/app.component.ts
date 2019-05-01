import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public showBar = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url.startsWith('/docs')) {
          this.showBar = false;
        } else {
          this.showBar = true;
        }
      }
    });
  }
}
