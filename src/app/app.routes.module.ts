import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ParticleSystemComponent } from './code/particle-system/particle-system.component';
import { CodeComponent } from './code/code.component';
import { TreeExampleComponent } from './code/tree-example/tree-example.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cv', component: CvComponent },
    { path: 'code', component: CodeComponent },
    { path: 'tree-example', component: TreeExampleComponent },
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
