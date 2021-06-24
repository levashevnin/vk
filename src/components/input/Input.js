import {VkComponent} from "@core/VkComponent";
let flag = 0;
export class Input extends VkComponent{
    static className = 'field__input'
    constructor($root) {
        super($root, {
            name: 'Input',
            listeners: ['input', 'click']
        });
    }
    toHTML() {
        return `
            <div class="text" contenteditable="true">Введите сообщение</div>
            <div class="button">
                <span class="material-icons">sentiment_satisfied_alt</span>
            </div>
            `
    }

    onInput(event){

        console.log('Input: onInput',event.target.textContent.trim())
    }
    onClick(event){

        console.log('Input: onInput',event.target.textContent.trim())
    }

}
