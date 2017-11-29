import { Component, ViewChild, ElementRef } from "@angular/core";
import { ParticleSystem, ParticleEmitter, IpsOptions, IpsEmitterOptions, IpsCoordinates, IpsPositiontype } from "particle-ins";

@Component({
  selector: 'particle-system',
  templateUrl: './particle-system.component.html'
})
export class ParticleSystemComponent {

  @ViewChild('canvas') canvas: ElementRef;

  private particleSystem: ParticleSystem;
  private particleEmitters: ParticleEmitter[] = [];

  constructor() {
  }

  ngAfterViewInit() {
    let options = new IpsOptions();
    this.particleSystem = new ParticleSystem(options, this.canvas.nativeElement, 600, 400);

    this.particleSystem.onLoad.subscribe(it => {
      this.particleSystem.start();
    });
  }

  public add() {
    let options = new IpsEmitterOptions(new IpsCoordinates(0, 0, 0, 0), new IpsCoordinates(-1, 1, -1, 1), 1000);
    options.positionType = IpsPositiontype.Relative;
    this.particleEmitters.push(this.particleSystem.addEmitter(options));
  }
}