import MHeader from "./m-header"
import Badge from "./badge"
import Flexbox from "./flexbox/flexbox"
import FlexboxItem from "./flexbox/flexbox-item"
import MCircle from "./m-circle"
import MProgress from "./m-progress"
import MVideo from "./m-video"

export default {
    install: function(Vue){
        Vue.component('MHeader', MHeader)
        Vue.component('Badge', Badge)
        Vue.component('Flexbox', Flexbox)
        Vue.component('FlexboxItem', FlexboxItem)
        Vue.component('MCircle', MCircle)
        Vue.component('MProgress', MProgress)
        Vue.component('MVideo', MVideo)
    },
    MHeader,
    Badge,
    Flexbox,
    FlexboxItem,
    MCircle,
    MProgress,
    MVideo
}