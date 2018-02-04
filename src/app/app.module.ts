import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvComponent } from './cv/cv.component';
import { ParticleEmitterComponent } from './code/particle-system/particle-emitter.component';
import { ParticleSystemComponent } from './code/particle-system/particle-system.component';
import { CodeComponent } from './code/code.component';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { HighlightJsModule } from 'angular2-highlight-js';
import { TreeNgxModule } from 'tree-ngx';
import { TreeExampleComponent } from './code/tree-example/tree-example.component';
import { HttpClientModule } from '@angular/common/http';
import { StationComponent } from './code/tree-example/station.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    ParticleSystemComponent,
    ParticleEmitterComponent,
    CodeComponent,
    TreeExampleComponent,
    StationComponent
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
    HighlightJsModule,
    TreeNgxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
