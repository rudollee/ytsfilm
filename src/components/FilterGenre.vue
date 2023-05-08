<template lang="">
    <button type="button" v-on:click="genreHandler('')" >All</button>
    <button type="button" v-on:click="genreHandler('SCI-FI')">Sci-fi</button>
</template>
<script setup lang="ts">
import { useGenreStore } from '@/stores/genreSelector';

const genreHandler = (genre: string) => {
    const genreStore = useGenreStore();
    genreStore.changeGenre(genre);
}

</script>
