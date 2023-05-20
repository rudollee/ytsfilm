<template lang="">
    <button type="button" :class="allSelected" v-on:click="genreHandler('')" >All</button>
    <button type="button" :class="scifiSelected" v-on:click="genreHandler('SCI-FI')">Sci-fi</button>
    <button type="button" :class="fantasySelected" v-on:click="genreHandler('FANTASY')">Fantasy</button>
</template>

<script setup lang="ts">
import { useGenreStore } from '@/stores/genreSelector';

const genreHandler = (genre: string) => {
    const genreStore = useGenreStore();
    genreStore.changeGenre(genre);
}

</script>
