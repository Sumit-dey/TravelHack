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
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/020e1179-46f8-43ff-9c44-4280cde630ec/ddc2a66-e5df6195-5eeb-498c-be58-7807cc3a2926.jpg/v1/fill/w_1280,h_720,q_75,strp/ocean_sunset_beach_wallpaper_hd_4k_by_sahibdm_ddc2a66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMDIwZTExNzktNDZmOC00M2ZmLTljNDQtNDI4MGNkZTYzMGVjXC9kZGMyYTY2LWU1ZGY2MTk1LTVlZWItNDk4Yy1iZTU4LTc4MDdjYzNhMjkyNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kGDLbnhqX8l-tHiayT7MzYB3UKvn2a6L0bU0OYpBCp0' alt='green forest' className='homeImage'></img>
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
                    <div className='location-names-spans1'>
                        <a href='/atlanta'>
                            <img src='https://media.discordapp.net/attachments/907008758226489385/907064997786566686/b2f9a313-334a-4e52-bdbe-caf0f0a6c804.png' alt='san-fran' className='san-fran-icon' />
                        </a>
                        <span className='link-title'>Atlanta</span>
                    </div>
                </div>
                <div className='oakland-div'>
                    <div className='location-names-spans2'>
                        <a href='/athens'>
                            <img src='https://media.discordapp.net/attachments/907008758226489385/907065103873101834/ee86b8d6-b214-43f5-912c-3db2637a5724.png' alt='oakland' className='oakland-icon' />
                        </a>
                        <span className='link-title'>Athens</span>
                    </div>
                </div>
                <div className='san-jose-div'>
                    <div className='location-names-spans3'>
                        <a href='/sanjose'>
                            <img src='https://media.discordapp.net/attachments/907008758226489385/907065148466950185/03626720-dc3d-4e49-8264-39231ba1e1e2.png' alt='san-jose' className='san-jose-icon' />
                        </a>
                        <span className='link-title'>San Jose</span>
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
                <a href='https://github.com/Sumit-dey/TravelHack' className='linked-in'>
                {/* <img src='https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png' /> */}
                    Github
                </a>
            </div>
        </div>


    )
}

export default HomePage;
