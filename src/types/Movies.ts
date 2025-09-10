export interface Movie {
    id: number;
    overview: string;
    poster: string | null;
    title: string;
}

export interface MoviesResponse {
    results: Movie[];
    total_pages: number;
    total_results: number;
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
    total_results: number;
}

export interface RawDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: any | null;
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
