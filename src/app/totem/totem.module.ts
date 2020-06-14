import { NgModule } from '@angular/core';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { TotemRouting, TotemComponents } from './totem.routing';

@NgModule({
    declarations: TotemComponents,
    imports: [
        TotemRouting,
        AngularFullpageModule
    ],
    providers: [],
    bootstrap: TotemComponents
})
export class TotemModule { }
