import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Movie from '../component/movie';
import '../scss/pages/menu.scss'
import { fetchPopularMovies } from '../store/moviesSlice';

function ListMovies() {
    const dispatch = useDispatch()
    // const listMovies = useSelector(state => state.listMovies.movies)
    const status = useSelector(state => state.listMovies.status)
    const nameGenre = useSelector(state => state.genres.genre)

    useEffect(() => {
        console.log('effect')
        dispatch(fetchPopularMovies())
    }, [])

    return (
        <div className='films'>
            {
                status === 'loading' ?
                    (
                        <div> no non no </div>
                    ) : (
                        <>
                            <h1> {nameGenre}</h1>
                            <h2> movies</h2>
                            <div >
                                <Movie />
                            </div>
                        </>
                    )
            }

        </div>
    )
}

export default ListMovies;

