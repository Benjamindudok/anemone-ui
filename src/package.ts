import Vue from 'vue';

import AUIBase from './components/base/base.vue';
import AUIHelloWorld from './components/hello-world/hello-world.vue';
import AUIOverlay from './components/overlay/overlay.vue';

const components: any = {
    AUIBase,
    AUIHelloWorld,
    AUIOverlay
};
// automatically register all components
Object.keys(components).forEach((name: string) =>
{
    Vue.component(name, components[name]);
});

// export components individually,
// incase users want to assign custom html tags
export const helloWorld: Vue = components.AnemonuiHelloWorld;

export default components;
