import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatMenuModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvComponent } from './cv/cv.component';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { HighlightJsModule } from 'angular2-highlight-js';
import { TreeNgxModule } from 'tree-ngx';
import { HttpClientModule } from '@angular/common/http';
import { ParticleSystemComponent } from './code/particle-ins/particle-system/particle-system.component';
import { ParticleEmitterComponent } from './code/particle-ins/particle-system/particle-emitter.component';
import { ParticleInsDocComponent } from './code/particle-ins/particle-ins-doc.component';
import { TreeExampleComponent } from './code/ngx-tree/tree-example/tree-example.component';
import { StationComponent } from './code/ngx-tree/tree-example/station.component';
import { NgxTreeDocComponent } from './code/ngx-tree/ngx-tree-doc.component';
import { NgxTreeHeaderComponent } from './code/ngx-tree/ngx-tree-header-doc/ngx-tree-header-doc.component';
import { NgxTreeApiComponent } from './code/ngx-tree/ngx-tree-api/ngx-tree-api.component';
import { NgxTreeExamplesComponent } from './code/ngx-tree/ngx-tree-examples/ngx-tree-examples.component';
import { NgxTreeCustomTemplateComponent } from './code/ngx-tree/ngx-tree-custom-template/ngx-tree-custom-template.component';
import { TreeDataService } from './service/tree-data.service';
import { NgxTreeCustomStylingComponent } from './code/ngx-tree/ngx-tree-custom-styling/ngx-tree-custom-styling.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    ParticleSystemComponent,
    ParticleEmitterComponent,
    ParticleInsDocComponent,
    TreeExampleComponent,
    StationComponent,
    NgxTreeDocComponent,
    NgxTreeHeaderComponent,
    NgxTreeApiComponent,
    NgxTreeExamplesComponent,
    NgxTreeCustomTemplateComponent,
    NgxTreeCustomStylingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    HighlightJsModule,
    TreeNgxModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [
    TreeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
