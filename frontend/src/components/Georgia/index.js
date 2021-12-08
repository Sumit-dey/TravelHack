import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getGeorgiaSpots } from '../../store/spots';
import './Georgia.css';

function Georgia() {

    const spots = useSelector(state => state.spots)

    const spotsArray = Object.assign([], spots)



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGeorgiaSpots());
    }, [dispatch])

    return (
        <div className='top-level-div'>
            <div className='berkeley-spots-parent-container'>
                <div className='san-francisco-location-title'>Stays in Georgia</div>
                {spotsArray.map(spot => {
                    return <div className='berkeley-spots-div' key={spot.id}>
                        <div>
                            <a href={`/spot/${spot.id}`}  >
                                <img src={spot.Images[0].url} alt='spot-image' className='berkeley-main-images' />
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
            {/* <div className='berkeley-map-parent-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84948.2835899843!2d-122.34193843017484!3d37.86904570210498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808579363a8549d3%3A0x94ea1595a675e993!2sBerkeley%2C%20CA!5e0!3m2!1sen!2sus!4v1636406013940!5m2!1sen!2sus" className='berkeley-map'></iframe>
            </div> */}
        </div>
    )
}

export default Georgia;
