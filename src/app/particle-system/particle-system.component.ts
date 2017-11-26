import { Component, ViewChild, ElementRef } from "@angular/core";
import { ParticleSystem } from "../../../../ins-particle-system/lib/particle-system";
import { ParticleEmitter } from "../../../../ins-particle-system/lib/particle-emitter";
import { IpsOptions } from "../../../../ins-particle-system/lib/model/ips-options";
import { IpsEmitterOptions } from "../../../../ins-particle-system/lib/model/ips-emitter-options";
import { IpsCoordinates } from "../../../../ins-particle-system/lib/model/ips-coordinates";
import { IpsPositionType } from "../../../../ins-particle-system/lib/model/ips-position-type";

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
    options.positionType = IpsPositionType.Relative;
    this.particleEmitters.push(this.particleSystem.addEmitter(options));
  }



}