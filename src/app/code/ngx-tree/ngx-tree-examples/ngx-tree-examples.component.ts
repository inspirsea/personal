import { Component } from '@angular/core';
import { NodeItem, TreeOptions, TreeMode } from 'tree-ngx';
import { TreeDataService } from '../../../service/tree-data.service';

@Component({
  selector: 'ngx-tree-examples',
  templateUrl: './ngx-tree-examples.component.html'
})
export class NgxTreeExamplesComponent {

  public multiCheckboxSelected = [];
  public singleCheckboxSelected = [];
  public multiSelected = [];
  public singleSelected = [];

  public multiCheckboxItems = this.treeDataService.createExampleData();
  public singleCheckboxItems = this.treeDataService.createExampleData();
  public multiItems = this.treeDataService.createExampleData();
  public singleItems = this.treeDataService.createExampleData();

  public multiCheckboxOptions: TreeOptions = {
    mode: TreeMode.MultiSelect,
    checkboxes: true,
    alwaysEmitSelected: false
  };
  public singleCheckboxOptions: TreeOptions = {
    mode: TreeMode.SingleSelect,
    checkboxes: true,
    alwaysEmitSelected: false
  };
  public multiOptions: TreeOptions = {
    mode: TreeMode.MultiSelect,
    checkboxes: false,
    alwaysEmitSelected: false
  };
  public singleOptions: TreeOptions = {
    mode: TreeMode.SingleSelect,
    checkboxes: false,
    alwaysEmitSelected: false
  };

  public multiCheckboxCode = `
  options = {
    mode: TreeMode.MultiSelect,
    checkboxes: true,
    alwaysEmitSelected: false
  }`;
  public singleCheckboxCode = `
  options = {
    mode: TreeMode.SingleSelect,
    checkboxes: true,
    alwaysEmitSelected: false
  };`;
  public multiCode = `
  options = {
    mode: TreeMode.MultiSelect,
    checkboxes: false,
    alwaysEmitSelected: false
  };`;
  public singleCode = `
  options = {
    mode: TreeMode.SingleSelect,
    checkboxes: false,
    alwaysEmitSelected: false
  };`;
  public templateCode = `
    <tree-ngx 
      (selectedItems)="selectedItems = $event"
      [nodeItems]="nodeItems"
      [options]="options">
    </tree-ngx>`;

  constructor(private treeDataService: TreeDataService) {
  }



  
}
