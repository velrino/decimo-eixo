import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Keyboard from "simple-keyboard";

@Component({
    selector: 'app-totem-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class TotemHomeComponent implements OnInit {
    @ViewChild('fullpageRef') fp_directive: ElementRef;
    config;
    fullpage_api;
    keyboard: Keyboard;

    constructor() {
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: false,
        };
    }

    ngOnInit() {
    }

    keyboardLayouts = {
        default: {
            'default': [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                '{tab} q w e r t y u i o p [ ] \\',
                '{lock} a s d f g h j k l ; \' {enter}',
                '{shift} z x c v b n m , . / {shift}',
                '.com @ {space}'
            ],
            'shift': [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} Q W E R T Y U I O P { } |',
                '{lock} A S D F G H J K L : " {enter}',
                '{shift} Z X C V B N M < > ? {shift}',
                '.com @ {space}'
            ]
        },
        numeric: {
            'default': [
                '1 2 3 {bksp}',
                '4 5 6',
                '7 8 9',
                'x 0',
            ],
        }
    }

    shazam() {
        console.log("SSSAS")
        this.keyboard = new Keyboard({
            // layout: {},
            onChange: input => this.onChange(input),
            onKeyPress: button => this.onKeyPress(button)
        });
    }

    onChange = (input: string) => {
        // this.value = input;
        console.log("Input changed", input);
    };

    onKeyPress = (button: string) => {
        console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        // if (button === "{shift}" || button === "{lock}") this.handleShift();
    };

    next() {
        this.fullpage_api.moveSectionDown();
    }

    getRef(fullPageRef: any) {
        this.fullpage_api = fullPageRef;
    }

    randomColor() {
        return '#' + Math.random().toString(16).slice(-3);
    }
}
