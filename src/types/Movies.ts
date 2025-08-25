

export  interface Movie {
    id:number,
    overview:string,
    poster:string | null,
    title:string,

}


export interface MoviesResponse {
    results: Movie[];
    total_pages: number;
    page: number;
}


export interface RawMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    adult: boolean;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    popularity: number;
    video: boolean;
}


export interface RawTMDBResponse {
    page: number;
    results: RawMovie[];
    total_pages: number;
}