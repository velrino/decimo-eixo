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
                'q w e r t y u i o p',
                'a s d f g h j k l',
                'z x c v b n m',
                '{shift} {space} {bksp}'
            ],
            'shift': [
                'Q W E R T Y U I O P',
                'A S D F G H J K L',
                'Z X C V B N M',
                '{shift} {space} {bksp}'
            ],
        },
        numeric: {
            'default': [
                '1 2 3',
                '4 5 6',
                '7 8 9',
                'x 0 {bksp}',
            ],
        }
    }

    shazam() {
        console.log("SSSAS")
        this.keyboard = new Keyboard({
            layout: this.keyboardLayouts.default,
            display: {
                '{bksp}': `<i class='fas fa-backspace'></i>`,
                '{space}': 'espaço',
                '{shift}': '<i class="fas fa-arrow-up"></i>',
            },
            onChange: input => this.onChange(input),
            onKeyPress: button => this.onKeyPress(button)
        });
    }
    value: any;
    onChange = (input: string) => {
        this.value = input;
        console.log("Input changed", input);
    };

    onKeyPress = (button: string) => {
        console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") this.handleShift();
    };

    handleShift = () => {
        let currentLayout = this.keyboard.options.layoutName;
        let shiftToggle = currentLayout === "default" ? "shift" : "default";

        this.keyboard.setOptions({
            layoutName: shiftToggle
        });
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
