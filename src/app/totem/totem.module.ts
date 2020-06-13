import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TotemRouting, TotemComponents } from './totem.routing';

@NgModule({
    declarations: TotemComponents,
    imports: [
        TotemRouting,
        NgbModule
    ],
    providers: [],
    bootstrap: TotemComponents
})
export class TotemModule { }
