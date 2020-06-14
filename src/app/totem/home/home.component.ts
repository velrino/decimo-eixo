import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Keyboard from "simple-keyboard";

@Component({
    selector: 'app-totem-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class TotemHomeComponent implements OnInit, AfterViewInit {
    @ViewChild('fullpageRef') fp_directive: ElementRef;
    config;
    fullpage_api;
    keyboard: Keyboard;
    form = {
        document: null,
        name: null,
        birth: null,
        sex: null,
        agree: null,
        height: null,
        weight: null,
        imc: null,
        temperature: null,
        evaluation: null,
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

    render = [
        {
            title: '<strong>qual é o número do seu CPF?</strong>',
            subTitle: 'pedimos esse dado para que suas informações de saúde sejam armazenadas com segurança nos sistemas da CCR.',
            input: 'document',
            img: '/assets/imgs/cnh.jpg',
            text: 'você pode achar o número na sua carteira de motorista :)',
            layout: this.keyboardLayouts.numeric,
            keyboard: null,
            type: 'keyboard',
            placeholder: '123.456.789-00',
        },
        {
            title: '<strong>qual é o seu nome?</strong>',
            subTitle: '(não precisa ser completo)',
            input: 'name',
            text: 'você pode achar o número na sua carteira de motorista :)',
            layout: this.keyboardLayouts.default,
            keyboard: null,
            placeholder: '',
            type: 'keyboard',
        },
        {
            title: '<strong>qual é o sua data de nascimento?</strong>',
            subTitle: '',
            input: 'birth',
            img: null,
            text: null,
            layout: this.keyboardLayouts.numeric,
            keyboard: null,
            placeholder: '',
            type: 'keyboard',
        },
        {
            title: 'qual é o seu sexo biológico?',
            subTitle: '',
            input: 'sex',
            img: null,
            text: null,
            layout: null,
            keyboard: null,
            placeholder: '',
            type: 'option',
        },
        {
            title: 'Precisamos saber sua altura aproximada em metros.',
            subTitle: '',
            input: 'height',
            img: null,
            text: null,
            layout: this.keyboardLayouts.numeric,
            keyboard: null,
            placeholder: '',
            type: 'keyboard',
        }
    ]
    constructor() {
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: false,
        };
    }

    ngOnInit() { }

    ngAfterViewInit() {
        for (let index = 0; index < this.render.length; index++) {
            const element = this.render[index];
            if (element.layout !== null) {
                this.enableKeyboard(element.input, element.layout);
            }
        }
    }

    enableKeyboard(inputName: string, layout: any) {
        new Keyboard(`.keyboard-${inputName}`, {
            layout,
            syncInstanceInputs: true,
            inputName,
            display: {
                '{bksp}': `<i class='fas fa-backspace'></i>`,
                '{space}': 'espaço',
                '{shift}': '<i class="fas fa-arrow-up"></i>',
            },
            onChange: input => this.onChange(inputName, input),
            onKeyPress: button => this.onKeyPress(button)
        });
    }
    value: any;

    onChange = (inputName: string, input: string) => {
        if (this.form.hasOwnProperty(inputName)) {
            this.form[inputName] = input;
            if (inputName == 'name') {
                const searchSting = 'height';
                this.render.forEach((item, index) => {
                    if (item.input === searchSting) {
                        this.render[index].title = `<strong>${input}</strong>, precisamos saber sua altura aproximada em metros.`;
                    }
                })
            }
        }
    };

    onKeyPress = (button: string) => {
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

    back() {
        this.fullpage_api.moveSectionUp();
    }

    next() {
        this.fullpage_api.moveSectionDown();
    }

    getRef(fullPageRef: any) {
        this.fullpage_api = fullPageRef;
    }

    randomColor() {
        return '#' + Math.random().toString(16).slice(-3);
    }

    hasBack(index: number) {
        return (index > 0);
    }

    hasItemType(type: string, result: string) {
        return type === result;
    }

}
