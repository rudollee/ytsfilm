<script setup lang="ts">
import FilmUnit from '@/components/FilmUnit.vue'
import restApi from '@/components/restApi';
import { ref, reactive, watch, onMounted } from 'vue';
import type { FilmPack } from '@/types/FilmType';
import { useGenreStore } from '@/stores/genreSelector';

  const genreStore = useGenreStore()
  const genre = ref<string>(genreStore.genre);
  const rating = ref<number>(genreStore.rating);

  const filmData: FilmPack = reactive({})
  
  watch([genre], () => {
    loadFilms();
    console.log('genre store: ', genreStore.genre);
  })

  const loadFilms = () => {
    restApi.get(`list_movies.json?limit=50&genre=${genre.value ?? ''}&sort_by=date_added&minimum_rating=${rating.value}&quality=2160p`)
    .then(response => {
      // console.log(response.data)

      filmData.movies = reactive(response.data.data.movies);

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
