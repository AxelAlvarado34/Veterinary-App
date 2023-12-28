import React from 'react'
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-main'>

            <img src="img/pets.png" alt="pets" className='main-banner' />
            <img src="img/vector-1.png" alt="wave" className='main-wave-1' />
            <img src="img/vector-2.png" alt="wave" className='main-wave-2' />

            <Link to={'/work'} className='main-cta'>
                <button className='cta-button'>
                    Let's go
                </button>
            </Link>

            <img src="img/bub-fo-1.png" alt="icon" className='main-icon icon-1'/>
            <img src="img/bub-fo-2.png" alt="icon" className='main-icon icon-2'/>
            <img src="img/bub-fo-3.png" alt="icon" className='main-icon icon-3'/>


            <img src="img/bub-bk-1.png" alt="icon" className='main-icon icon-4'/>
            <img src="img/bub-bk-2.png" alt="icon" className='main-icon icon-5'/>
            <img src="img/bub-bk-3.png" alt="icon" className='main-icon icon-6'/>

        </div>
    )
}

export default Home
