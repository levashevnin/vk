import {VkComponent} from "@core/VkComponent";
import {InputSelection} from "@/components/input/InputSelection";
let flag = 0;
export class Input extends VkComponent{
    static className = 'field__input'
    constructor($root, options) {
        super($root, {
            name: 'Input',
            listeners: ['input', 'click'],
            ...options
        });
    }
    toHTML() {
        return `
            <div class="text" id="#texts" contenteditable="true">Введите сообщение</div>
            <div class="button">
                <span class="material-icons">sentiment_satisfied_alt</span>
            </div>
            `
    }
    prepare() {
        this.selection = new InputSelection()
    }
    init(){
        super.init()
        const $inp = this.$root.find('.text')
       // this.selection.select($inp)
        this.emitter.subscribe('it is working', text => {
            $inp.text(text, 1)
            console.log('Input from Stickers', text)
        })
    }

    onInput(event){
        const $inp = this.$root.find('.text')
        $inp.text(event.target.textContent)
        console.log('Input: onInput',event.target.textContent.length)
    }
    onClick(event){
        if(event.target.textContent === 'Введите сообщение') {
            const $inp = this.$root.find('.text')
            $inp.text(event.target.textContent)
        }
        console.log('Input: onInput',event.target.textContent.length)
    }

}
