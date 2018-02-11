import { Component } from '@angular/core';
import { TreeDataService } from '../../../service/tree-data.service';

@Component({
  selector: 'ngx-tree-custom-styling',
  templateUrl: './ngx-tree-custom-styling.component.html'
})
export class NgxTreeCustomStylingComponent {
  public customStyleCode = `
  //Custom tree styling
  .my-custom-tree {
    .node-name {
      padding: 5px 0px 5px 10px;
      &.markSelected {
        padding: 5px 0px 5px 4px;
        border-left: 6px mat-color($accent, 600) solid;
      }
    }
    
    .arrow-down {
      border-top: 7px solid mat-color($accent, 600);
    }
    .arrow-right {
      border-left: 7px solid #455A64;
    }
  }
  `;

  public nodeItems = this.treeDataService.createExampleData();

  constructor(private treeDataService: TreeDataService) { }
}
