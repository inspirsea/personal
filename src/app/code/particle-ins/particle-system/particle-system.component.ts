import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ParticleSystem, ParticleEmitter, IpsOptions, IpsEmitterOptions, IpsCoordinates, IpsPositiontype } from 'particle-ins';

@Component({
  selector: 'particle-system',
  templateUrl: './particle-system.component.html'
})
export class ParticleSystemComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvas') canvas: ElementRef;

  private particleSystem: ParticleSystem;
  public particleEmitters: ParticleEmitter[] = [];

  constructor() {
  }

  ngAfterViewInit() {
    let options = new IpsOptions();
    this.particleSystem = new ParticleSystem(options, this.canvas.nativeElement, 600, 400);

    this.particleSystem.onLoad.subscribe(it => {
      this.particleSystem.start();
    });
  }

  ngOnDestroy() {
    this.particleSystem.destroy();
    this.particleSystem = null;
  }

  public add() {
    let options = new IpsEmitterOptions(new IpsCoordinates(0, 0, 0, 0), new IpsCoordinates(-1, 1, -1, 1), 1000);
    options.positionType = IpsPositiontype.Relative;
    this.particleEmitters.push(this.particleSystem.addEmitter(options));
  }
}
