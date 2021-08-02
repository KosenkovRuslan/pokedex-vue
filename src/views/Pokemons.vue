<template>
    <div class="pokemons">
      <infinity-loading-container loadingComponent="PokemonMiniCardLoading" component="PokemonMiniCard" :url="url"/>
    </div>
</template>

<script lang="ts">
import InfinityLoadingContainer from '@/components/Containers/InfinityLoadingContainer.vue'
import { defineComponent } from 'vue'

const POKEMONS_URL = 'pokemon'

export default defineComponent({
  components: { InfinityLoadingContainer },
  name: 'Pokemons',
  data () {
    return {
      url: POKEMONS_URL
    }
  }
})
</script>

<style lang="scss" scoped>
  .pokemons {
    height: 100%;
  }
</style>
