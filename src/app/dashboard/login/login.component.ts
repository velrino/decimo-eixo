import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class DashboardLoginComponent implements OnInit {
    formType: 'data' | 'password' = 'data';

    body: any;

    render = {
        data: {
            img: '/assets/imgs/logo-grupo-ccr.png',
            title: 'Coloque suas informações pessoais para acessar seu perfil',
            btn: 'confirmar informações'
        },
        password: {
            img: null,
            title: 'Para manter sua conta segura, crie uma senha de 4 números',
            btn: 'acessar'
        }
    }

    constructor(public router: Router) { }

    ngOnInit() {
        this.defineBody();
    }

    defineBody() {
        this.body = this.render[this.formType];
    }

    isFormTypeData() {
        return this.formType === 'data';
    }

    submit() {
        const { formType } = this;
        if (formType == 'data') {
            this.formType = 'password';
            this.defineBody();
        } else if (formType == 'password') {
            this.router.navigate(['/dashboard/welcome']);
        }
    }
}
