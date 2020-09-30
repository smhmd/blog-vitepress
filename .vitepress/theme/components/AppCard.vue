<template>
  <a
    :href="path"
    :key="path"
    class="w-full flex flex-col justify-center border border-black"
  >
    <div class="p-6">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <p class="text-sm">{{ summary }}</p>
    </div>
    <div class="flex flex-col justify-start items-end pattern px-6 py-2">
      <span class="border border-black bg-white self-end px-2 py-1 text-xs">
        <time>{{ time }} min</time> read
      </span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    path: { type: String, required: true },
    summary: { type: String, required: true },
    title: { type: String, required: true },
    time: { type: String, required: true },
  },
};
</script>

<style lang="postcss" scoped>
.pattern {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.3' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
