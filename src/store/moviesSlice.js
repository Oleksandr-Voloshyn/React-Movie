import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPopularMovies = createAsyncThunk(
    'movies/fetchPopularMovies',
    async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US&page=1`)
        return data;

    }
)


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (params) => {
        console.log(params)
        const { id, page } = params
        console.log(id, page)
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`)
        console.log(data)
        return data;

    }
)



export const fetchMoviesRecomendations = createAsyncThunk(
    'movie/fetchMoviesRecomendations',
    async (id) => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US&page=1`
        )
        return data
    }
)

export const fetchMoviesSearch = createAsyncThunk(
    'movie/fetchMoviesSearch',
    async (name) => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US&query=${name}&page=1&include_adult=false`
        )
        return data
    }
)

const initialState = {
    movies: [],
    id: null,
    status: 'loading',
    page: 1,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.genres = action.payload
        },
        changeIdGenre: (state, action) => {
            state.id = action.payload
        },
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.status = 'loading'
            state.movies = []
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.movies = []
        })

        builder.addCase(fetchPopularMovies.pending, (state, action) => {
            state.status = 'loading'
            state.movies = []
        })
        builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.movies = action.payload
            state.status = 'success'
        })

        builder.addCase(fetchMoviesRecomendations.pending, (state, action) => {
            state.status = 'loading'
            state.movies = []
        })
        builder.addCase(fetchMoviesRecomendations.fulfilled, (state, action) => {
            state.movies = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchMoviesSearch.fulfilled, (state, action) => {
            state.movies = action.payload
            state.status = 'success'
        })
    }
})
export const { changeIdGenre, changePage } = moviesSlice.actions

export default moviesSlice.reducer