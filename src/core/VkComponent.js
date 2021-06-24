import {DomListener} from "@core/DomListener";

export class VkComponent extends DomListener{
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }
    // Вовзвращает шаблон компонента
    toHTML(){
        return ''
    }

    init(){
        this.initDOMListeners()
    }

    destroy(){
        this.removeDOMListeners()
    }
}