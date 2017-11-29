import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes.module';
import { HomeComponent } from './home.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvComponent } from './cv.component';
import { ParticleEmitterComponent } from './particle-system/particle-emitter.component';
import { ParticleSystemComponent } from './particle-system/particle-system.component';
import { CodeComponent } from './code.component';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { HighlightJsModule } from 'angular2-highlight-js';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    ParticleSystemComponent,
    ParticleEmitterComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
