import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';

import { TotemRouting, TotemComponents } from './totem.routing';

@NgModule({
    declarations: TotemComponents,
    imports: [
        TotemRouting,
        MnFullpageModule.forRoot()
    ],
    providers: [],
    bootstrap: TotemComponents
})
export class TotemModule { }
