import { configureStore } from "@reduxjs/toolkit";
import deteilsMovie from "./deteilsMovie"
import genresSlice from "./genresSlice";
import moviesSlice from "./moviesSlice";


export const store = configureStore({
    reducer: {
        deteils: deteilsMovie,
        genres: genresSlice,
        listMovies: moviesSlice,

    }
})

// Створити компонент списку фільмів для жанрів на передавати пропсом 
// фунцію запиту на 

// для компонентів які не будуть мати окремого - робити порівняння через URL