import {VkComponent} from "@core/VkComponent";
import {createStickers} from "@/components/stickers/stickers.template";




export class Stickers extends VkComponent{
    static className = 'field__stickers'

    constructor($root, options) {
        super($root, {
            name: Stickers,
            listeners: ['click']
        });
    }
    toHTML() {
        return createStickers()
    }
    onClick(event){
        console.log('Stickers: onClick', event.target)
    }
}