import React, { useEffect, useState, memo } from 'react';
import '../scss/pages/movie.scss'
import Star from '../image/star.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchActorsMovie, fetchDeteilsMovie } from '../store/deteilsMovie';
import { changePage, fetchMovies, fetchMoviesRecomendations } from '../store/moviesSlice';



const Movie = memo(() => {


    const dispatch = useDispatch();
    const listMovies = useSelector(state => state.listMovies.movies)
    const status = useSelector(state => state.listMovies.status)
    const { id, page } = useSelector(state => state.listMovies)

    const [sws, setSws] = useState(false)

    console.log(id)
    const openMovie = (id) => {
        dispatch(fetchDeteilsMovie(id))
        dispatch(fetchActorsMovie(id))
        dispatch(fetchMoviesRecomendations(id))

    }
    const nextPage = () => {
        dispatch(changePage(page + 1))


    }
    const sss = () => {
        console.log(id, page)

        //dispatch(fetchMovies({ id, page }))
    }

    useEffect(() => {
        return () => {
            dispatch(changePage(1))
            console.log('ss')
        }
        console.log(page)
    }, [page])


    if (status === 'loading') {
        return <h1>Loading</h1>
    }

    return (
        <div className='films-list'>
            {listMovies?.results.map((movie) =>
                <div className='cart-movie' key={movie.id} onClick={() => openMovie(movie.id)}>
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <img className='cart-movie__poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <div className='block-describe'>
                            <p> {movie.title}</p>
                            <div>
                                <img className='star' src={Star} />
                                <img className='star' src={Star} />
                                <img className='star' src={Star} />
                                <img className='star' src={Star} />
                                <img className='star' src={Star} />
                            </div>
                        </div>
                    </Link>
                </div>)
            }
            <div>
                <button onClick={() => nextPage()}> page </button>
            </div>
        </div >
    )

})

export default Movie;

