import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class DashboardHomeComponent {
    list = [
        {
            icon: 'fas fa-video',
            text: 'agendar consultas por vídeo com a nossa equipe médica',
        },
        {
            icon: 'fas fa-hospital',
            text: 'conferir os <strong>serviços</strong> do nosso <strong>posto de saúde</strong>',
        },
        {
            icon: 'fas fa-newspaper',
            text: 'acompanhar <strong>novidades e campanhas de saúde</strong>',
        },
        {
            icon: 'fas fa-user-md',
            text: 'ver seus <strong>ver seus atendimentos e exames já realizados</strong>',
        },
    ]
}
