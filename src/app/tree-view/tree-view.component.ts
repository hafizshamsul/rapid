import { Component, Input } from '@angular/core';

/**
 * Generated class for the TreeViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tree-view',
  template: `
  <ul>
    <li *ngFor="#node of treeData">
      {{node.name}}
      <tree-view [treeData]="node.subnodes"></tree-view>
    </li>
  </ul>
  `
})
export class TreeViewComponent {
  @Input() treeData: [];

  constructor() {
  }

}