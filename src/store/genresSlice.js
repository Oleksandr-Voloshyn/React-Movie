import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchGenres = createAsyncThunk(
    'genres/fetchGenres',
    async () => {
        const { data } = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US')
        return data.genres;

    }
)


const initialState = {
    genres: [],
    status: 'loading',
    genre: '',
}

const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setGenre: (state, action) => {
            state.genre = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.pending, (state, action) => {
            state.genres = []
        })
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        builder.addCase(fetchGenres.rejected, (state, action) => {
            state.genres = []
        })
    }
})

export const { setGenre } = genresSlice.actions
export default genresSlice.reducer