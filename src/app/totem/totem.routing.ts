import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotemHomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: TotemHomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const TotemComponents = [
    TotemHomeComponent,
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TotemRouting { }