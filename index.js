import Header from "./a-header"
import Badge from "./badge"
import Flexbox from "./flexbox/flexbox"
import FlexboxItem from "./flexbox/flexbox-item"
import ACircle from "./a-circle"
import AProgress from "./a-progress"

export default {
    install: function(Vue){
        Vue.component('AHeader', Header)
        Vue.component('Badge', Badge)
        Vue.component('Flexbox', Flexbox)
        Vue.component('FlexboxItem', FlexboxItem)
        Vue.component('ACircle', ACircle)
        Vue.component('AProgress', AProgress)
    },
    Header,
    Badge,
    Flexbox,
    FlexboxItem,
    ACircle,
    AProgress
}