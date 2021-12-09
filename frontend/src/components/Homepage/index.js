import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getSearch } from '../../store/spots';
import './Homepage.css';

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory()
    // const sessionUser = useSelector(state => state.session.user);
    const [searchTerm, setSearchTerm] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('search term', searchTerm)
        let searchParam = await dispatch(getSearch(searchTerm))
        console.log('search param', searchParam)
        if (searchParam) {
            history.push(`/allspots/${searchTerm}`)
        }
    }

    return (
        <div>
            <div className='search-bar-div'>
                <img src='https://www.teahub.io/photos/full/112-1123990_beautiful-cartoon-background.jpg' alt='green forest' className='homeImage'></img>
            </div>
            <div className='inner-search-div'>
                <form className='search-bar' onSubmit={handleSubmit}>
                    <label>
                        <input className='search-bar-input' type='search' placeholder='Which city would you like to visit?' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
                        <button type='submit' className='search-button'>Search</button>
                    </label>
                </form>
            </div>
            <div>
                <a href='/allspots' className='get-all-spots'>I'm Flexible</a>
                <div className='get-all-spots-title'>Not sure where to go? Perfect.</div>
            </div>
            <div className='explore-nearby-title-div'>
                <span className='explore-nearby-title'>Inspiration for your next trip...</span>
            </div>
            <div className='explore-nearby-div'>
                <div className='san-francisco-div'>
                    <div className='location-names-spans4'>
                        <a href='/atlanta'>
                        Atlanta
                        </a>
                    </div>
                </div>
                <div className='oakland-div'>
                    <div className='location-names-spans4'>
                        <a href='/athens'>
                           Athens
                        </a>
                        {/* <span className='link-title'>Oakland</span> */}
                    </div>
                </div>
                <div className='san-jose-div'>
                    <div className='location-names-spans3'>
                        <a href='/sanjose'>
                           San Jose
                        </a>

                    </div>
                </div>

            </div>
            <div className='footer'>
                <a href='/' className='my-name'>
                    Sumit Dey
                </a>
                <a href='https://www.linkedin.com/in/sumit-dey-a27349114/' className='linked-in'>
                {/* <img src='https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png' /> */}
                    LinkedIn
                </a>
            </div>
        </div>


    )
}

export default HomePage;
