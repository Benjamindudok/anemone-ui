import Vue from 'vue';

import Base from './components/base/base.vue';
import HelloWorld from './components/hello-world/hello-world.vue';
import Overlay from './components/overlay/overlay.vue';
import Transitions from './components/transitions/transitions.vue';
import { convertToSnakeCase } from './utils/stringUtils';
import App from './views/app.vue';

const components: any = {
    Base,
    HelloWorld,
    Overlay,
    Transitions,
};

// automatically register all components
Object.keys(components).forEach((name: string) =>
{
    Vue.component('anemone-' + convertToSnakeCase(name), components[name]);
});

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App)
}).$mount('#app');
