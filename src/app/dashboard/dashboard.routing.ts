import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: DashboardHomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const DashboardComponents = [
    DashboardHomeComponent,
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRouting { }