import React, {  useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getAthensSpots } from '../../store/spots';
import '../Atlanta/Atlanta.css';

function Athens() {
    const spots = useSelector(state => state.spots)

    const spotsArray = Object.assign([], spots)



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAthensSpots());
    }, [dispatch])

    return (
        <div className='top-level-div'>
            <div className='berkeley-spots-parent-container'>
                <div className='san-francisco-location-title'>Stays in Athens</div>
                {spotsArray.map(spot => {
                    return <div className='berkeley-spots-div' key={spot.id}>
                        <div>
                            <a href={`/spot/${spot.id}`}  >
                                {/* {console.log(spot?.Images)} */}
                                <img src={spot?.Images[0].url} alt='spot' className='berkeley-main-images' />
                            </a>
                        </div>
                        <div className='berkeley-spots-info-div'>
                            <div className='berkeley-spots-title'>{spot.title}</div>

                            <div className='berkeley-spots-details'>{spot.details}</div>

                            <div className='berkeley-spots-price'>${spot.price} / night</div>
                        </div>
                    </div>

                })}
            </div>
            <div className='berkeley-map-parent-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105916.10993338717!2d-83.45916278238698!3d33.94425461935733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66d19b4b433b9%3A0x4d747202d69d617c!2sAthens%2C%20GA!5e0!3m2!1sen!2sus!4v1639066943150!5m2!1sen!2sus" title='athen' className='berkeley-map'></iframe>
            </div>
        </div>
    )
}

export default Athens;
