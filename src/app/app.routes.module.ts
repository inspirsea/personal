import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CvComponent } from './cv.component';
import { ParticleSystemComponent } from './particle-system/particle-system.component';
import { CodeComponent } from './code.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cv', component: CvComponent },
    //{ path: 'code', component: CodeComponent },
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