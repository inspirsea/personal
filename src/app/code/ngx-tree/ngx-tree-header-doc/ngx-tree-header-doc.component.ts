import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-tree-header',
  templateUrl: './ngx-tree-header-doc.component.html'
})
export class NgxTreeHeaderComponent {
  constructor(private router: Router) {
  }

  public navigate(path: string) {

    let prefix = '/code/';

    if (this.router.url.startsWith('/docs')) {
      prefix = '/docs/tree-ngx/';
    }

    this.router.navigate([prefix + path]);
  }
}
