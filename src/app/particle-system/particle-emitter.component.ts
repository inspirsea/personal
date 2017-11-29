import { Component, Input } from "@angular/core";
import { ParticleSystem, ParticleEmitter, IpsOptions, IpsEmitterOptions, IpsCoordinates, IpsPositiontype, MinMax } from "particle-ins";

@Component({
    selector: 'particle-emitter',
    templateUrl: './particle-emitter.component.html'
})
export class ParticleEmitterComponent {

    @Input() particleEmitter: ParticleEmitter;

    private startOption: IpsCoordinates = new IpsCoordinates(0, 0, 0, 0);
    private velocityOption: IpsCoordinates = new IpsCoordinates(-1, 1, -1, 1);
    private sizeOption: MinMax<number> = { min: 0, max: 0 };

    constructor() {
    }

    public startMinX(value: number) {
        this.startOption.x.min = value;
        this.particleEmitter.setStartOption(this.startOption);
    }

    public startMaxX(value: number) {
        this.startOption.x.max = value;
        this.particleEmitter.setStartOption(this.startOption);
    }

    public startMinY(value: number) {
        this.startOption.y.min = value;
        this.particleEmitter.setStartOption(this.startOption);
    }

    public startMaxY(value: number) {
        this.startOption.y.max = value;
        this.particleEmitter.setStartOption(this.startOption);
    }

    public startMinVX(value: number) {
        this.velocityOption.x.min = value;
        this.particleEmitter.setVelocityOption(this.velocityOption);
    }

    public startMaxVX(value: number) {
        this.velocityOption.x.max = value;
        this.particleEmitter.setVelocityOption(this.velocityOption);
    }

    public startMinVY(value: number) {
        this.velocityOption.y.min = value;
        this.particleEmitter.setVelocityOption(this.velocityOption);
    }

    public startMaxVY(value: number) {
        this.velocityOption.y.max = value;
        this.particleEmitter.setVelocityOption(this.velocityOption);
    }

    public sizeMin(value: number) {
        this.sizeOption.min = value;
        this.particleEmitter.setSizeOption(this.sizeOption);
    }

    public sizeMax(value: number) {
        this.sizeOption.max = value;
        this.particleEmitter.setSizeOption(this.sizeOption);
    }

    public setColor(value: string) {
        this.particleEmitter.setColor(value);
    }

    public setGrowth(value: number) {
        this.particleEmitter.setGrowth(value);
    }
}