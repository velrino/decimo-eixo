import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardHomeComponent } from './home/home.component';
import { DashboardLoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'home', component: DashboardHomeComponent },
    { path: 'login', component: DashboardLoginComponent },
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