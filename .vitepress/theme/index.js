import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import './code.css';
import 'tailwindcss/tailwind.css';

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
