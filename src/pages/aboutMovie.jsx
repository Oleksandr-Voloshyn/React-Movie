import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movie from '../component/movie';
import '../scss/pages/aboutMovie.scss'

const deteilss = {
    "adult": false,
    "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    "belongs_to_collection": {
        "id": 529892, "name": "Black Panther Collection",
        "poster_path": "/uVnN6KnfDuHiC8rsVsSc7kk0WRD.jpg",
        "backdrop_path": "/yzVxUMYGKjK3GgmVI2BhmbuL9UY.jpg"
    },
    "budget": 250000000,
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 12, "name": "Adventure" },
        { "id": 878, "name": "Science Fiction" }
    ],
    "homepage": "https://wakandaforevertickets.com",
    "id": 505642,
    "imdb_id": "tt9114286",
    "original_language": "en",
    "original_title": "Black Panther: Wakanda Forever",
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "popularity": 1923.162,
    "poster_path": "/ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
    "production_companies": [
        {
            "id": 420,
            "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
            "name": "Marvel Studios", "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2022-11-09",
    "revenue": 767000000,
    "runtime": 162,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en", "name": "English"
        },
        { "english_name": "French", "iso_639_1": "fr", "name": "Français" },
        { "english_name": "Haitian; Haitian Creole", "iso_639_1": "ht", "name": "" },
        { "english_name": "Spanish", "iso_639_1": "es", "name": "Español" },
        { "english_name": "Xhosa", "iso_639_1": "xh", "name": "" }
    ],
    "status": "Released",
    "tagline": "Forever.",
    "title": "Black Panther: Wakanda Forever",
    "video": false,
    "vote_average": 7.558,
    "vote_count": 1302
}


function AboutMovie() {
    const dispatch = useDispatch();
    const deteils = useSelector(state => state.deteils.deteils)
    const status = useSelector(state => state.deteils.status)
    console.log(deteils)


    if (status === 'loading') {
        return <h1> Loading</h1>
    }
    return (
        <div className='aboutMovie'>
            <div className='aboutMovie__block'>
                <img src={`https://image.tmdb.org/t/p/w500/${deteils.poster_path}`} />
                <div>
                    <div className='title'>
                        <h1>{deteils.original_title}</h1>
                        <h2> voice </h2>
                    </div>
                    <h3>Genres</h3>
                    {deteils?.genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
                    <h3>The synopsis</h3>
                    <p>{deteils.overview}</p>
                </div>
            </div>
            <h1> RECOMMENDED</h1>
            <h3>Movies</h3>
            <Movie />
        </div>
    )
}

export default AboutMovie;