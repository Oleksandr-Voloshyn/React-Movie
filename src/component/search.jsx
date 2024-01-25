import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../scss/component/search.scss'
import { fetchMoviesSearch } from '../store/moviesSlice'

const Search = () => {
    const [serchMovies, setSearchMovies] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(serchMovies)
        dispatch(fetchMoviesSearch(serchMovies))

    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <button>click</button>
            <input
                type={'text'}
                name='text'
                value={serchMovies}
                onChange={e => setSearchMovies(e.target.value)}
                required
            />
        </form>
    )
}

export default Search