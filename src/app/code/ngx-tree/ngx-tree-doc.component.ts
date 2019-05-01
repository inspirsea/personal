import { Component, OnInit } from '@angular/core';
import { NodeItem } from 'tree-ngx';

@Component({
  selector: 'ngx-tree-doc',
  templateUrl: './ngx-tree-doc.component.html'
})
export class NgxTreeDocComponent implements OnInit {
  public nodeItems: NodeItem<any>[];

  public exampleCode = `
  //Import tree-ngx module
  import { TreeNgxModule } from 'tree-ngx';

  @NgModule({
    imports: [TreeNgxModule]
  }

  //Usage
  <tree-ngx [nodeItems]="nodeItems"> </tree-ngx>

  this.nodeItems = [{
    id: '0',
    name: 'Heros',
    children: [
      {
        id: '1',
        name: 'Batman',
        item: {
          phrase: 'I am the batman'
        }
      },
      {
        id: '2',
        name: 'Superman',
        item: {
          phrase: 'Man of steel'
        }
      }
    ]
  },
  {
    id: '3',
    name: 'Villains',
    children: [
      {
        id: '4',
        name: 'Joker',
        item: {
          phrase: 'Why so serius'
        }
      },
      {
        id: '5',
        name: 'Lex luthor',
        item: {
          phrase: 'I am the villain of this story'
        }
      }
    ]
  }];
`;

  ngOnInit() {
    this.nodeItems = [{
      id: '0',
      name: 'Heros',
      children: [
        {
          id: '1',
          name: 'Batman',
          item: {
            phrase: 'I am the batman'
          }
        },
        {
          id: '2',
          name: 'Superman',
          item: {
            phrase: 'Man of steel'
          }
        }
      ]
    },
    {
      id: '3',
      name: 'Villains',
      children: [
        {
          id: '4',
          name: 'Joker',
          item: {
            phrase: 'Why so serius'
          }
        },
        {
          id: '5',
          name: 'Lex luthor',
          item: {
            phrase: 'I am the villain of this story'
          }
        }
      ]
    }];
  }
}
