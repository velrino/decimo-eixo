import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRouting, DashboardComponents } from './dashboard.routing';

@NgModule({
    declarations: DashboardComponents,
    imports: [
        CommonModule,
        DashboardRouting,
    ],
    providers: [],
    bootstrap: DashboardComponents
})
export class DashboardModule { }
