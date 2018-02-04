import { Component, Input, OnChanges } from '@angular/core';
import { Station } from '../../model/system';

@Component({
    selector: 'station',
    templateUrl: './station.component.html'
})
export class StationComponent {
  @Input() station: Station;
}
