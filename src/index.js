import Vue from "vue";
import App from './components/app';

Vue.config.debug = true;//开启错误提示

new Vue({
    el: '#app',
    render: h => h(App)
})