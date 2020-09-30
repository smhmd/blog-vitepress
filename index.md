<div class="space-y-8">
  <AppCard path="/blog/vue3-lint" title="Set up Vue 3 linting in VSCode" summary="Setting up linting in a Vite app using Vue 3" time="1" />
  <AppCard path="/blog/javascript-library" title="Create a JavaScript library and publish it to NPM" summary="Tips and crucial steps to creating and publishing an NPM package" time="1" />
  <AppCard path="/blog/node-http" title="Set up a simple Node http Server" summary="http API in node to spin up a simple server" time="1" />
  <AppCard path="/blog/promises" title="`then`, `catch`, and `finally` in JavaScript" summary="Understand the use of then, catch, and finally in async JavaScript" time="1" />
</div>

<script>
import AppCard from "/.vitepress/theme/components/AppCard.vue";
export default {
  components: {
    AppCard,
  },
};
</script>
