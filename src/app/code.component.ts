import { Component, ElementRef } from '@angular/core';
import { IpsOptions, ParticleSystem, IpsEmitterOptions, IpsCoordinates, IpsPositiontype } from 'particle-ins';

@Component({
    selector: 'code-content',
    templateUrl: './code.component.html'
})
export class CodeComponent {

    constructor() {
    }

    ngAfterViewInit() {
        this.example1();
    }

    public example1Code = `
            let canvas = document.getElementById("example1") as HTMLCanvasElement;
    
            let options = new IpsOptions();
            let particleSystem = new ParticleSystem(options, canvas, 1000, 600);
        
            particleSystem.onLoad.subscribe(it => {
              particleSystem.start();
            });
    
            let emitterOptions = new IpsEmitterOptions(
                new IpsCoordinates(0, 0, 0, 0),
                new IpsCoordinates(-1, 1, -1, 1),
                1000
            );
    
            emitterOptions.positionType = IpsPositiontype.Relative;
            particleSystem.addEmitter(emitterOptions);
    `;

    public example1() {

        let canvas = document.getElementById("example1") as HTMLCanvasElement;

        let options = new IpsOptions();
        let particleSystem = new ParticleSystem(options, canvas, 600, 400);
    
        particleSystem.onLoad.subscribe(it => {
          particleSystem.start();
        });

        let emitterOptions = new IpsEmitterOptions(
            new IpsCoordinates(0, 0, 0, 0),
            new IpsCoordinates(-1, 1, -1, 1),
            1000
        );

        emitterOptions.positionType = IpsPositiontype.Relative;
        particleSystem.addEmitter(emitterOptions);

    }
}
