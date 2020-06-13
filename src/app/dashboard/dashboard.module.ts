import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRouting, DashboardComponents } from './dashboard.routing';

@NgModule({
    declarations: DashboardComponents,
    imports: [
        DashboardRouting,
        NgbModule
    ],
    providers: [],
    bootstrap: DashboardComponents
})
export class DashboardModule { }
