import {
    AnemoneBadge,
    AnemoneBase,
    AnemoneButton,
    AnemoneHelloWorld,
    AnemoneOverlay,
    AnemonePagination,
    AnemoneTransitions
} from '../../src/package.ts';

export default ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData // site metadata
                }) => {

    Vue.component('anemone-badge', AnemoneBadge);
    Vue.component('anemone-base', AnemoneBase);
    Vue.component('anemone-button', AnemoneButton);
    Vue.component('anemone-hello-world', AnemoneHelloWorld);
    Vue.component('anemone-overlay', AnemoneOverlay);
    Vue.component('anemone-pagination', AnemonePagination);
    Vue.component('anemone-transitions', AnemoneTransitions);
}
