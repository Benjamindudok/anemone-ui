import Vue from 'vue';

import Base from './components/base/base.vue';
import HelloWorld from './components/hello-world/hello-world.vue';
import Overlay from './components/overlay/overlay.vue';
import Transitions from './components/transitions/transitions.vue';

import { convertToSnakeCase } from './utils/stringUtils';

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

// export components individually,
// incase users want to assign custom html tags
export const AnemoneBase: Vue = components.Base;
export const AnemoneHelloWorld: Vue = components.HelloWorld;
export const AnemoneOverlay: Vue = components.Overlay;
export const AnemoneTransitions: Vue = components.Transitions;

export default components;
