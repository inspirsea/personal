import { Component } from '@angular/core';
import { TreeDataService } from '../../../service/tree-data.service';

@Component({
  selector: 'ngx-tree-custom-template',
  templateUrl: './ngx-tree-custom-template.component.html'
})
export class NgxTreeCustomTemplateComponent {

  public customCollapsibleItems = this.treeDataService.createExampleData();
  public customCollapsibleCode = `
  <tree-ngx [nodeItems]="customCollapsibleItems">
    <ng-template #nodeCollapsibleTemplate let-expanded="expanded">
      <span *ngIf="!expanded">-</span>
      <span *ngIf="expanded">+</span>
    </ng-template>
  </tree-ngx>
  `;

  public customNameItems = this.treeDataService.createExampleData();
  public customNameTemplateCode = `
  <tree-ngx [nodeItems]="customNameItems">
    <ng-template #nodeNameTemplate let-node="node" let-context="context">
      <span [class.active]="context.active">{{node.name}} id: {{node.id}}</span>
      <i (click)="context.delete()" class="clickable treeIcon material-icons">delete</i>
    </ng-template>
  </tree-ngx>
  `;

  constructor(private treeDataService: TreeDataService) {
  }
}
