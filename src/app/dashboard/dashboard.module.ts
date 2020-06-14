import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { DashboardRouting, DashboardComponents } from './dashboard.routing';

@NgModule({
    declarations: DashboardComponents,
    imports: [
        DashboardRouting,
        NgbModule,
        CommonModule
    ],
    providers: [],
    bootstrap: DashboardComponents
})
export class DashboardModule { }
