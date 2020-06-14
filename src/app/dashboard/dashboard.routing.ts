import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardHomeComponent } from './home/home.component';
import { DashboardLoginComponent } from './login/login.component';
import { DashboardWelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: 'home', component: DashboardHomeComponent },
    { path: 'login', component: DashboardLoginComponent },
    { path: 'welcome', component: DashboardWelcomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const DashboardComponents = [
    DashboardHomeComponent,
    DashboardLoginComponent,
    DashboardWelcomeComponent
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRouting { }