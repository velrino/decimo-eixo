import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-totem-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class TotemHomeComponent implements OnInit {
    @ViewChild('fullpageRef') fp_directive: ElementRef;
    config;
    fullpage_api;

    constructor(private renderer: Renderer2) {

        // this is just an example => for more details on config please visit fullPage.js docs
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: true,
        };
    }

    ngOnInit() {
    }

    teste() {
        this.fullpage_api.moveSectionDown();
    }

    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }

    randomColor() {
        return '#' + Math.random().toString(16).slice(-3);
    }
}
