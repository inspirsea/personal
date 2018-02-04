import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NodeItem, TreeMode, TreeOptions } from 'tree-ngx';
import { Station } from '../../model/system';

@Component({
    selector: 'tree-example',
    templateUrl: './tree-example.component.html'
})
export class TreeExampleComponent implements OnInit {

    public selected: Station[];
    public items: NodeItem<any>[] = [];
    public options: TreeOptions = {
        checkboxes: false,
        mode: TreeMode.SingleSelect,
        alwaysEmitSelected: true
    };

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.loadData();
        this.items = [];
    }

    public selectedItemsChanged(items: Station[]) {
        this.selected = items;
    }

    private loadData() {
        this.httpClient.get('./assets/data/systems.json').subscribe((stations: Station[]) => {
            this.items = this.createTree(stations);
        });
    }

    private createTree(stations: Station[]) {

        let alligences: NodeItem<string>[] = [];

        for (let station of stations) {
            if (station.allegiance_id) {
                if (!this.alligencesContainsAlligence(alligences, station)) {
                    alligences.push(this.createAlligence(station));
                }

                let alligence = this.getAlligence(alligences, station.allegiance_id);

                if (!this.alligenceContainsGovernment(alligence, station)) {
                    alligence.children.push(this.createGovernment(station));
                }

                let government = this.getGovernment(alligence, station);

                government.children.push(this.createStation(station));
            }

        }

        return alligences;
    }

    private alligencesContainsAlligence(alligences: NodeItem<string>[], station: Station) {
        return alligences.find(it => it.id === station.allegiance_id.toString());
    }

    private getAlligence(alligences: NodeItem<string>[], id: number) {
        return alligences.find(it => it.id === id.toString());
    }

    private getGovernment(alligence: NodeItem<string>, station: Station) {
        return alligence.children.find(it => it.id === this.getGovernmentId(station));
    }

    private alligenceContainsGovernment(alligence: NodeItem<string>, station: Station) {
        return alligence.children.find(it => it.id === this.getGovernmentId(station));
    }

    private createAlligence(station: Station) {
        return {
            id: station.allegiance_id.toString(),
            name: station.allegiance,
            item: station.allegiance,
            children: []
        };
    }

    private createGovernment(station: Station) {
        return {
            id: this.getGovernmentId(station),
            name: station.government,
            item: station.government,
            expanded: false,
            children: []
        };
    }

    private createStation(station: Station) {
        return {
            id: station.id.toString(),
            name: station.name,
            item: station,
        };
    }

    private getGovernmentId(station: Station) {
        return station.allegiance_id.toString() + '_' + station.government_id.toString();
    }

}
