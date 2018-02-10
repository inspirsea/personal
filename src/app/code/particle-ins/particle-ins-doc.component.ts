import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { IpsOptions, ParticleSystem, IpsEmitterOptions, IpsCoordinates, IpsPositiontype } from 'particle-ins';
import { ImageItem } from '../../../../../Particle-ins/lib/model/image-item';

@Component({
  selector: 'particle-ins-doc',
  templateUrl: './particle-ins-doc.component.html'
})
export class ParticleInsDocComponent implements AfterViewInit, OnDestroy {

  @ViewChild('ex1Canvas') ex1Canvas: ElementRef;
  @ViewChild('ex2Canvas') ex2Canvas: ElementRef;
  @ViewChild('ex3Canvas') ex3Canvas: ElementRef;
  @ViewChild('ex4Canvas') ex4Canvas: ElementRef;

  public particleSystem1: ParticleSystem;
  public particleSystem2: ParticleSystem;
  public particleSystem3: ParticleSystem;
  public particleSystem4: ParticleSystem;

  constructor() {
  }

  public example1Code = `
    let canvas = document.getElementById("example1") as HTMLCanvasElement;

    let options = new IpsOptions();
    let particleSystem = new ParticleSystem(options, canvas, 1000, 600);

    let emitterOptions = new IpsEmitterOptions(
        new IpsCoordinates(0, 0, 0, 0),
        new IpsCoordinates(-1, 1, -1, 1),
        1000
    );

    emitterOptions.positionType = IpsPositiontype.Relative;
    particleSystem.addEmitter(emitterOptions);
    `;

  public example2Code = `
    let canvas = document.getElementById("example2") as HTMLCanvasElement;

    let options = new IpsOptions();
    let particleSystem = new ParticleSystem(options, canvas, 1000, 600);

    let emitterOptions = new IpsEmitterOptions(
        new IpsCoordinates(0, 333, 0, 600),
        new IpsCoordinates(-1, 1, -1, 1),
        1000,
        1000,
        { min: 20, max: 40 },
        -100,
        "ffaa87"
    );

    let emitterOptions2 = new IpsEmitterOptions(
        new IpsCoordinates(333, 666, 0, 600),
        new IpsCoordinates(-0.1, 0.1, -0.1, 0.1),
        1000,
        1000,
        { min: 1, max: 3 },
        10,
        "3345ff"
    );

    let emitterOptions3 = new IpsEmitterOptions(
        new IpsCoordinates(666, 1000, 0, 600),
        new IpsCoordinates(-1, 1, -1, 1),
        1000,
        500,
        { min: 3, max: 10 },
        -10,
        "aa4587"
    );

    particleSystem.addEmitter(emitterOptions);
    particleSystem.addEmitter(emitterOptions2);
    particleSystem.addEmitter(emitterOptions3);
    `;

  public example3Code = `
    let canvas = document.getElementById("example3") as HTMLCanvasElement;
    
    let snowTexture: ImageItem = {
        image: "../assets/images/snowflake.png",
        key: "snow"
    };

    let options = new IpsOptions();
    options.textures = [snowTexture];
    options.color = "cccccc"
    
    let particleSystem = new ParticleSystem(options, canvas, 1000, 600);

    let emitterOptions = new IpsEmitterOptions(
        new IpsCoordinates(-1, 1, 1, 1),
        new IpsCoordinates(-0.5, 0.5, -0.8, -0.8),
        1000,
        2500
    );

    emitterOptions.size = { min: 3, max: 8 }
    emitterOptions.textureKey = "snow";
    emitterOptions.positionType = IpsPositiontype.Relative;

    particleSystem.addEmitter(emitterOptions);
    `;

  public example4Code = `
        let canvas = document.getElementById("example4") as HTMLCanvasElement;

        let options = new IpsOptions();
        let particleSystem = new ParticleSystem(options, canvas, 1000, 600);

        let emitterOptions = new IpsEmitterOptions(
            new IpsCoordinates(495, 505, 200, 200),
            new IpsCoordinates(-0.1, 0.1, 1, 1),
            100
        );

        emitterOptions.growth = 50;
        emitterOptions.color = "f27d0c";

        let emitterOptions2 = new IpsEmitterOptions(
            new IpsCoordinates(495, 505, 200, 200),
            new IpsCoordinates(-0.2, 0.2, 1.5, 1.5),
            100,
            700
        );

        emitterOptions2.size = { min: 1, max: 5 };
        emitterOptions2.growth = -3;
        emitterOptions2.color = "fdcf58";

        particleSystem.addEmitter(emitterOptions);
        particleSystem.addEmitter(emitterOptions2);
    `;

  ngAfterViewInit() {
    this.example1();
    this.example2();
    this.example3();
    this.example4();
  }

  ngOnDestroy() {
    this.particleSystem1.destroy();
    this.particleSystem2.destroy();
    this.particleSystem3.destroy();
    this.particleSystem4.destroy();
  }

  public example1() {

    let options = new IpsOptions();
    this.particleSystem1 = new ParticleSystem(options, this.ex1Canvas.nativeElement, 1000, 600);

    let emitterOptions = new IpsEmitterOptions(
      new IpsCoordinates(0, 0, 0, 0),
      new IpsCoordinates(-1, 1, -1, 1),
      1000
    );

    emitterOptions.positionType = IpsPositiontype.Relative;
    this.particleSystem1.addEmitter(emitterOptions);
  }

  public example2() {

    let options = new IpsOptions();
    this.particleSystem2 = new ParticleSystem(options, this.ex2Canvas.nativeElement, 1000, 600);

    let emitterOptions = new IpsEmitterOptions(
      new IpsCoordinates(0, 333, 0, 600),
      new IpsCoordinates(-1, 1, -1, 1),
      1000,
      1000,
      { min: 20, max: 40 },
      -100,
      'ffaa87'
    );

    let emitterOptions2 = new IpsEmitterOptions(
      new IpsCoordinates(333, 666, 0, 600),
      new IpsCoordinates(-0.1, 0.1, -0.1, 0.1),
      1000,
      1000,
      { min: 1, max: 3 },
      10,
      '3345ff'
    );

    let emitterOptions3 = new IpsEmitterOptions(
      new IpsCoordinates(666, 1000, 0, 600),
      new IpsCoordinates(-1, 1, -1, 1),
      1000,
      500,
      { min: 3, max: 10 },
      -10,
      'aa4587'
    );

    this.particleSystem2.addEmitter(emitterOptions);
    this.particleSystem2.addEmitter(emitterOptions2);
    this.particleSystem2.addEmitter(emitterOptions3);
  }

  public example3() {
    let snowTexture: ImageItem = {
      image: '../assets/images/snowflake.png',
      key: 'snow'
    };
    let options = new IpsOptions();
    options.textures = [snowTexture];
    options.color = 'cccccc';
    this.particleSystem3 = new ParticleSystem(options, this.ex3Canvas.nativeElement, 1000, 600);

    let emitterOptions = new IpsEmitterOptions(
      new IpsCoordinates(-1, 1, 1, 1),
      new IpsCoordinates(-0.5, 0.5, -0.8, -0.8),
      1000,
      2500
    );

    emitterOptions.size = { min: 3, max: 8 };

    emitterOptions.textureKey = 'snow';

    emitterOptions.positionType = IpsPositiontype.Relative;
    this.particleSystem3.addEmitter(emitterOptions);
  }

  public example4() {
    let options = new IpsOptions();
    this.particleSystem4 = new ParticleSystem(options, this.ex4Canvas.nativeElement, 1000, 600);

    let emitterOptions = new IpsEmitterOptions(
      new IpsCoordinates(495, 505, 200, 200),
      new IpsCoordinates(-0.1, 0.1, 1, 1),
      100
    );

    emitterOptions.growth = 50;
    emitterOptions.color = 'f27d0c';

    let emitterOptions2 = new IpsEmitterOptions(
      new IpsCoordinates(495, 505, 200, 200),
      new IpsCoordinates(-0.2, 0.2, 1.5, 1.5),
      100,
      700
    );

    emitterOptions2.size = { min: 1, max: 5 };
    emitterOptions2.growth = -3;
    emitterOptions2.color = 'fdcf58';

    this.particleSystem4.addEmitter(emitterOptions);
    this.particleSystem4.addEmitter(emitterOptions2);
  }
}
