export class InputSelection {
    static className = 'selected'

    constructor() {
        this.current = null
    }

    // $el instanceof DOM === true
    select($el) {
        this.clear()
        $el.focus().addClass(InputSelection.className)

        this.current = $el
    }

    clear() {
        this.group.forEach($el => $el.removeClass(InputSelection.className))
        this.group = []
    }
}