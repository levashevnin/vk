import {VkComponent} from "@core/VkComponent";
import {createStickers} from "@/components/stickers/stickers.template";


export class Stickers extends VkComponent{
    static className = 'field__stickers'

    constructor($root, options) {
        super($root, {
            name: 'Stickers',
            listeners: ['click'],
            ...options
        });
    }
    toHTML() {
        return createStickers()
    }



    onClick(event){

        if(event.target.className==="element"){
            const text = event.target.textContent
            this.emitter.emit('it is working', text)
        }
        else{
            const text = 'Введите сообщение'
            this.emitter.emit('it is working', text)
        }

        if(event.target.dataset.recent === '1'){
            const $inp = this.$root.find('.stickers')
            $inp.recentStickers()
        }
        if(event.target.dataset.recent === '0'){
            this.$root.$el.innerHTML = createStickers()
        }
        console.log('Stickers: onClick', event.target.dataset.mode)
    }
}