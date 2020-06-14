import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Keyboard from "simple-keyboard";

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-totem-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class TotemHomeComponent implements OnInit, AfterViewInit {
    @ViewChild('fullpageRef') fp_directive: ElementRef;
    @ViewChild('content') content: any;
    config;
    fullpage_api;
    keyboard: Keyboard;
    modalRef: NgbModal;
    actualSlide: number = 0;

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
    modalTitle = '';
    render = [
        {
            title: '<strong>Qual é o número do seu CPF?</strong>',
            subTitle: 'Pedimos esse dado para que suas informações de saúde sejam armazenadas com segurança nos sistemas da CCR.',
            input: 'document',
            img: '/assets/imgs/carteirinha@3x.jpg',
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
            text: null,
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
            type: 'sex-option',
        },
        {
            title: null,
            subTitle: '',
            input: 'agree',
            img: null,
            text: null,
            layout: null,
            keyboard: null,
            placeholder: '',
            type: 'modal',
        },
        {
            title: null,
            subTitle: '',
            input: 'loading',
            img: null,
            text: null,
            layout: null,
            keyboard: null,
            placeholder: '',
            type: 'loading',
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
    constructor(private modalService: NgbModal) {
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
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
                '{bksp}': `apagar`,
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
                this.modalTitle = `<strong>${input}</strong>, confira os termos e condições para a segurança dos seus dados com a CCR`;
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
        if (button === "{shift}" || button === "{lock}") this.handleShift();
    };

    handleShift = () => {
        let currentLayout = this.keyboard.options.layoutName;
        let shiftToggle = currentLayout === "default" ? "shift" : "default";

        this.keyboard.setOptions({
            layoutName: shiftToggle
        });
    };

    back(index: number) {
        this.actualSlide = (index - 1);
        this.fullpage_api.moveSectionUp();
        this.verify();
    }

    next(index: number) {
        this.actualSlide = (index + 1);
        this.fullpage_api.moveSectionDown();
        this.verify();
    }

    verify() {
        if (this.isModal()) {
            this.openModal(this.content);
        } else if (this.isLoading()) {
            setTimeout(() => this.next(this.actualSlide), 2000);
        }
    }

    exit() {

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

    isModal() {
        return (this.render[this.actualSlide].type === 'modal');
    }

    isLoading() {
        return (this.render[this.actualSlide].type === 'loading');
    }

    sexOptionResult(value: boolean) {
        this.form.sex = value;
    }

    openModal(content) {
        this.modalService.open(content, { backdrop: 'static', centered: true, size: 'xl', backdropClass: 'bg-dark', scrollable: true }).result.then((result) => {
            if (result) {
                this.next(this.actualSlide);
            } else if (!result) {
                this.back(this.actualSlide);
            }
        }, () => {
            // this.back(this.actualSlide);
        });
    }

    hideModal() {
        this.modalService.dismissAll();
    }
}
