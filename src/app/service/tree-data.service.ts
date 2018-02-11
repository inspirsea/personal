import { Injectable } from '@angular/core';
import { NodeItem } from 'tree-ngx';

@Injectable()
export class TreeDataService {

  public createExampleData() {

    let nodeItems: NodeItem<any>[] = [];

    let i = 0;

    nodeItems.push({
      id: '0',
      name: 'Empire',
      children: [
        {
          id: '1',
          name: 'The Emperor',
          item: 'Emperor (Major baddie)'
        },
        {
          id: '2',
          name: 'Grand Moff Tarkin',
          item: 'Cold dude'
        },
        {
          id: '3',
          name: 'Admiral Firmus Piett',
          item: 'Admiral Piett!'
        }
      ]
    });

    nodeItems.push({
      id: '4',
      name: 'Rebel',
      children: [
        {
          id: '5',
          name: 'Han Solo',
          item: 'Captain of the millenium falcon'
        },
        {
          id: '6',
          name: 'Princess Leia',
          item: 'Royalty'
        },
        {
          id: '7',
          name: 'Luke Skywalker',
          item: 'Jedi like his father'
        }
      ]
    });

    nodeItems.push({
      id: '8',
      name: 'Neutural',
      children: [
        {
          id: '9',
          name: 'Greedo',
          item: 'Paints one of the walls in mos eisley space harbour'
        },
        {
          id: '10',
          name: 'Boba Fett',
          item: 'Sarlacc...'
        }
      ]
    });

    return nodeItems;
  }

}
