import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tree-api',
  templateUrl: './ngx-tree-api.component.html'
})
export class NgxTreeApiComponent {

  public nodeItemType = 'NodeItem<T>';
  public selectedItemsType = 'EventEmitter<any>';
  public addByIdSignature = 'addNodeById(nodeItem: NodeItem<any>, id: string)';
  public deleteByIdSignature = 'deleteById(id: string)';
  public editNameByIdSignature = 'editNameById(id: string, name: string)';
  public editItemByIdSignature = 'editItemById(id: string, item: any)';
  public childrenSignature = 'children?: NodeItem<any>[]';
  public nameCallbackSignature = 'nameClick?: (item: NodeItem<any>) => void';
  public selectCallbackSignature = 'select?: (item: NodeItem<any>) => void';
  public unSelectCallbackSignature = 'unSelect?: (item: NodeItem<any>) => void';
  public toggleCallbackSignature = 'toggle?: (item: NodeItem<any>) => void';
  

  constructor() {
  }
}
