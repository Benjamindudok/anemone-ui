import { VueConstructor } from 'vue';
import { convertToSnakeCase } from './utils/stringUtils';

import AnemoneBase from './components/base/base.vue';
import AnemoneHelloWorld from './components/hello-world/hello-world.vue';
import AnemoneOverlay from './components/overlay/overlay.vue';
import AnemoneTransitions from './components/transitions/transitions.vue';

// save reference to all components for later use
const components: any = {
    AnemoneBase,
    AnemoneHelloWorld,
    AnemoneOverlay,
    AnemoneTransitions,
};

export default class AnemoneUI {
    public static install = (Vue: VueConstructor, options: any = {}) => {
        // automatically register all components
        Object.keys(components).forEach((name: string) =>
        {
            Vue.component(convertToSnakeCase(name), components[name]);
        });
    }
}

// export components individually,
// incase users want to assign custom html tags
export {
    AnemoneBase,
    AnemoneHelloWorld,
    AnemoneOverlay,
    AnemoneTransitions
};

// Install plugin automatically if loaded in the browser
if (typeof window !== 'undefined' && !!(window as any).Vue) {
    (window as any).Vue.use(AnemoneUI);
}
