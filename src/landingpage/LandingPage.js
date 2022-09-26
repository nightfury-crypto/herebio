import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const services = [
        { title: 'COMPLEMENTARY', link: 'complementary' },
        { title: 'GC CONTENT', link: 'contentgc' },
        { title: 'GLOBAL ALIGNMENT', link: 'global' },
        { title: 'LOCAL ALIGNMENT', link:  'local'},
    ]
    return (
        <div className='mainpage'>
            <div className="mainstart">
                <h1>HERE BIO</h1>
                <h4>It's a website where you can find some tools related to biology</h4>
                <h5 className="chipshow">Select the service from the sidebar</h5>
            </div>
            <div className="service">
                <h3>SERVICES <span></span></h3>
                <div className="allchips">
                    {services.map((service, i) => (
                        <Link to={`/${service.link}`} key={i}>
                            <div className="onechip" key={i}>
                                <h5>{service.title}</h5>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default LandingPage;
