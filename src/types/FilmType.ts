export interface FilmType {
    id: string,
    medium_cover_image: string,
    small_cover_image: string,
    title: string,
    genre: string[],
    summary: string,
    url: string,
    imdb_code: string
}

export interface FilmPack {
    limit?: number,
    movie_count?: number,
    movies?: Array<FilmType>,
    page_number?: number,
}


