<script setup lang="ts">
import FilmUnit from '@/components/FilmUnit.vue'
import restApi from '@/components/restApi';
import { ref, reactive, watch, onMounted } from 'vue';
import type { FilmPack } from '@/types/FilmType';
import { useGenreStore } from '@/stores/genreSelector';

  const genreStore = useGenreStore()
  const genre = ref<string>('');
  const rating = ref<number>(7);

  const filmData: FilmPack = reactive({})

  watch(() => genreStore.genre, (newValue) => {
    genre.value = newValue;
    rating.value = genreStore.rating;

    loadFilms();
  });
  
  const loadFilms = () => {
    restApi.get(`list_movies.json?limit=50&genre=${genre.value ?? ''}&sort_by=date_added&minimum_rating=${rating.value}&quality=2160p`)
    .then(response => {
      // console.log(response.data)

      filmData.movies = reactive(response.data.data.movies.slice(0, 20));

      console.log(filmData)
    })
    .catch(error => console.log(error));
  }

  onMounted(() => {
    loadFilms();
  })



</script>

<template>
      <section v-for="film in filmData.movies" :key="film.id" class="Movie">
        <FilmUnit :film="film" />
      </section>
</template>
