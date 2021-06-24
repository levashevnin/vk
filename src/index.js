import './scss/index.scss'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './simplebar'
import {Vk} from "@/components/vk/Vk";
import {Stickers} from "@/components/stickers/Stickers";
import {Input} from "@/components/input/Input";



const vk = new Vk('#app', {
    components: [Stickers, Input]
})

vk.render()