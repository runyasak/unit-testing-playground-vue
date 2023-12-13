<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => count.value++
</script>

<template>
  <h1>Count: {{ count }}</h1>

  <button data-testid="increment" @click="increment">Increment</button>
</template>
