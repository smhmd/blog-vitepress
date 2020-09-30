<template>
  <div class="flex flex-col h-full">
    <app-header />
    <div class="px-10 max-w-3xl mx-auto flex-grow w-full">
      <div class="mb-8" v-if="$page.relativePath.includes('blog/')">
        <a href="/" class="inline-block border border-black px-4 py-3 mb-5"
          >Back</a
        >
        <h1 class="text-4xl font-bold">{{ $page.frontmatter.title }}</h1>
        <summary class="text-sm">{{ $page.frontmatter.summary }}</summary>
      </div>
      <Content />
    </div>
    <app-footer />
    <Debug />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import Debug from 'vitepress/dist/client/app/components/Debug.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
    Debug,
  },
};
</script>

<style lang="postcss">
html,
body {
  height: 100%;
  @apply antialiased;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  @apply bg-white;
}

::-webkit-scrollbar-thumb {
  @apply bg-black;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-black bg-opacity-75;
}

p,
pre,
.gridsome-highlight {
  @apply mb-4;
}

pre {
  @apply border p-2 overflow-y-scroll;
}
</style>
