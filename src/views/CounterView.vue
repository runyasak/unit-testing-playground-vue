<script lang="ts">
export default {
  data() {
    return {
      total: 0
    }
  },
  methods: {
    increment() {
      this.total++
    }
  }
}
</script>

<template>
  <h1>Count: {{ total }}</h1>
  <button data-testid="increment" @click="increment">+</button>
</template>
