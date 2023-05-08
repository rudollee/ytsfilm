<script setup lang="ts">
import type { FilmType } from '@/types/FilmType'

const props = defineProps({
  film: Object as () => FilmType
})

</script>

<template lang="">
		<div class="Movie__Column">
			<img :src="film.medium_cover_image" :alt="film.title" width="100" class="Movie__Poster" />
		</div>
		<div class="Movie__Column">
			<h1>{{ film.title }}</h1>
			<div class="Movie__Genres">
					<span class="Movie__Genre" v-for="genre in film.genres" :key="genre" >
						{{genre}}
					</span>
			</div>
			<div class="Movie__Synopsis">
					{{ film.synopsis }}
			</div>
			<div class="Movie__Urls">
				<a :href=film.url class="Movie__Url" target="_blank">YTS</a>
				<a :href="`https://www.imdb.com/title/${film.imdb_code}`" class="Movie__Url" target="_blank">imdb</a>
			</div>
		</div>
</template>
