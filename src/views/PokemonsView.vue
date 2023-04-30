<script setup lang="ts">
import type { PokemonData } from '@/models/pokemon.model'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const pokemons = ref<PokemonData[]>([])

onMounted(async () => {
  const result = await axios.get<PokemonData[]>(
    'https://pokedex-workshop-api.vercel.app/api/pokemons'
  )

  console.log('hello result !!', result)

  pokemons.value = result.data
})
</script>

<template>
  <div class="pokemon-wrapper">
    <div v-for="pokemon of pokemons" :key="pokemon.name" class="pokemon-section">
      <img :src="pokemon.img" :alt="pokemon.name" />
      <span class="pokemon-name">
        {{ pokemon.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.pokemon-wrapper {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.pokemon-section {
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
}

.pokemon-name {
  text-transform: capitalize;
  font-weight: bold;
}
</style>
