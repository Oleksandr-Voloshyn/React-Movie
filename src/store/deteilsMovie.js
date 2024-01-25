import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchDeteilsMovie = createAsyncThunk(
    'deteils/fetchDeteilsMovie',
    async (id) => {
        console.log(id)
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US`)

        return data;

    }
)

export const fetchActorsMovie = createAsyncThunk(
    'actors/fetchDeteilsMovie',
    async (id) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US`)
        console.log(data.cast)
        return data.cast
    }

)

const initialState = {
    deteils: [],
    actors: [],
    status: 'loading',
}

const deteilsMovie = createSlice({
    name: 'deteils',
    initialState,
    reducers: {
        setDeteils: (state, action) => {
            state.deteils = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDeteilsMovie.pending, (state, action) => {
            state.deteils = []
            state.status = 'loading'
        })
        builder.addCase(fetchDeteilsMovie.fulfilled, (state, action) => {
            state.deteils = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchDeteilsMovie.rejected, (state, action) => {
            state.deteils = []
        })
        builder.addCase(fetchActorsMovie.fulfilled, (state, action) => {
            state.actors = action.payload
        })
    }
})

export default deteilsMovie.reducer