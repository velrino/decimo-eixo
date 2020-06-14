import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { TotemRouting, TotemComponents } from './totem.routing';

@NgModule({
    declarations: TotemComponents,
    imports: [
        TotemRouting,
        AngularFullpageModule,
        CommonModule,
    ],
    providers: [],
    bootstrap: TotemComponents
})
export class TotemModule { }
