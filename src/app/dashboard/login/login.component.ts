import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class DashboardLoginComponent {
    formType: 'data' | 'password' = 'data';
}
