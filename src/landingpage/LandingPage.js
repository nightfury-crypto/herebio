import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='mainpage'>
            <div className="mainstart">
                <h1>HERE BIO</h1>
                <h4>It's a website where you can find some tools related to biology</h4>
                <h5>Select the service from the sidebar.</h5>
                <Link to="/about">
                    <h5>ABOUT</h5>
                </Link>
                <img src="/private/homepage.png" alt="" />
            </div>
        </div>
    )
}

export default LandingPage
