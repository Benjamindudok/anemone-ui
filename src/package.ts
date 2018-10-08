import { VueConstructor } from 'vue';
import { convertToSnakeCase } from './utils/stringUtils.ts';

import AnemoneBadge from './components/badge/badge.vue';
import AnemoneBase from './components/base/base.vue';
import AnemoneButton from './components/button/button.vue';
import AnemoneHelloWorld from './components/hello-world/hello-world.vue';
import AnemoneOverlay from './components/overlay/overlay.vue';
import AnemonePagination from './components/pagination/pagination.vue';
import AnemoneTransitions from './components/transitions/transitions.vue';

// save reference to all components for later use
const components: any = {
    AnemoneBadge,
    AnemoneBase,
    AnemoneButton,
    AnemoneHelloWorld,
    AnemoneOverlay,
    AnemonePagination,
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
    AnemoneBadge,
    AnemoneBase,
    AnemoneButton,
    AnemoneHelloWorld,
    AnemoneOverlay,
    AnemonePagination,
    AnemoneTransitions
};

// Install plugin automatically if loaded in the browser
if (typeof window !== 'undefined' && !!(window as any).Vue) {
    (window as any).Vue.use(AnemoneUI);
}
