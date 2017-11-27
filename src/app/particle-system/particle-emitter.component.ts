import { Component, Input } from "@angular/core";
import { ParticleEmitter } from "../../../../ins-particle-system/lib/particle-emitter";
import { EmitterOptions } from "../../../../ins-particle-system/lib/model/emitter-options";

@Component({
    selector: 'particle-emitter',
    templateUrl: './particle-emitter.component.html'
})
export class ParticleEmitterComponent {

    @Input() particleEmitter: ParticleEmitter;

    constructor() {
    }

    public startMinX(value: number) {
        this.particleEmitter.startOption.x.min = value;
    }

    public startMaxX(value: number) {
        this.particleEmitter.startOption.x.max = value;
    }

    public startMinY(value: number) {
        this.particleEmitter.startOption.y.min = value;
    }

    public startMaxY(value: number) {
        this.particleEmitter.startOption.y.max = value;
    }

    public startMinVX(value: number) {
        this.particleEmitter.velocityOption.x.min = value/1000;
    }

    public startMaxVX(value: number) {
        this.particleEmitter.velocityOption.x.max = value/1000;
    }

    public startMinVY(value: number) {
        this.particleEmitter.velocityOption.y.min = value/1000;
    }

    public startMaxVY(value: number) {
        this.particleEmitter.velocityOption.y.max = value/1000;
    }

    public sizeMin(value: number) {
        this.particleEmitter.sizeOption.min = value;
    }

    public sizeMax(value: number) {
        this.particleEmitter.sizeOption.max = value;
    }

    public setColor(value: string) {
        this.particleEmitter.setColor(value);
    }

    public setGrowth(value: number) {
        this.particleEmitter.setGrowth(value);
    }
}