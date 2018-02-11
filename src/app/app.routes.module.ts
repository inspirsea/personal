import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ParticleInsDocComponent } from './code/particle-ins/particle-ins-doc.component';
import { NgxTreeDocComponent } from './code/ngx-tree/ngx-tree-doc.component';
import { TreeExampleComponent } from './code/ngx-tree/tree-example/tree-example.component';
import { NgxTreeApiComponent } from './code/ngx-tree/ngx-tree-api/ngx-tree-api.component';
import { NgxTreeExamplesComponent } from './code/ngx-tree/ngx-tree-examples/ngx-tree-examples.component';
import { NgxTreeCustomTemplateComponent } from './code/ngx-tree/ngx-tree-custom-template/ngx-tree-custom-template.component';
import { NgxTreeCustomStylingComponent } from './code/ngx-tree/ngx-tree-custom-styling/ngx-tree-custom-styling.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cv', component: CvComponent },
    {
        path: 'code', children: [
            { path: 'particle-ins', component: ParticleInsDocComponent },
            { path: 'tree-ngx-intro', component: NgxTreeDocComponent },
            { path: 'tree-ngx-api', component: NgxTreeApiComponent },
            { path: 'tree-ngx-example', component: TreeExampleComponent },
            { path: 'tree-ngx-examples', component: NgxTreeExamplesComponent },
            { path: 'tree-ngx-custom-template', component: NgxTreeCustomTemplateComponent },
            { path: 'tree-ngx-custom-styling', component: NgxTreeCustomStylingComponent },
        ]
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
