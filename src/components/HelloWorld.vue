<script setup lang="ts">
defineProps<{
  msg: string
  title: string
}>()
</script>

<template>
  <div class="greetings tw-text-center tw-md:text-left">
    <h1 class="tw-font-medium tw-text-4xl tw-mb-4">{{ msg }}</h1>
    <h3 class="tw-text-xl">
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener" class="tw-text-blue-500">Vite</a>
      +
      <a href="https://vuejs.org/" target="_blank" rel="noopener" class="tw-text-blue-500">{{
        title
      }}</a
      >. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
