import React, { useEffect } from 'react'
import '../scss/pages/categories.scss'
import logo from '../image/logo.png'
import circle from '../image/circle.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres, setGenre } from '../store/genresSlice'
import { changeIdGenre, fetchMovies } from '../store/moviesSlice'
import { Link } from 'react-router-dom'


const a = 1;
const Categories = () => {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres.genres);
    const { id, page } = useSelector(state => state.listMovies)

    const setId = (id, name, page) => {
        dispatch(fetchMovies(id, page))
        dispatch(changeIdGenre(id))
        dispatch(setGenre(name))
    }

    useEffect(() => {
        dispatch(fetchGenres())
    }, [])

    return (
        <div className='list-categories'>categories
            <img src={logo} alt='logo' />
            <div className='genres'>
                <h2> Genres</h2>
                {
                    genres.map(genre => (
                        <Link to={`/genres/${genre.name}`} className='genre' onClick={() => setId(genre.id, genre.name, page)} key={genre.id}>
                            <img src={circle} />
                            <p> {genre.name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;