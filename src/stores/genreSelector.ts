import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGenreStore = defineStore('genre', () => {
    const genre = ref('')
    const rating = ref(7)

    function changeGenre(newGenre: string){
      console.log(newGenre);
      genre.value = newGenre;
      rating.value = genre.value === '' ? 7 : 6;
    }

    return { genre, rating, changeGenre }
  })
  