import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const LandingPage = () => {
    const services = [
        { title: 'COMPLEMENTARY', link: 'complementary' },
        { title: 'GC CONTENT', link: 'contentgc' },
        { title: 'GLOBAL ALIGNMENT', link: 'global' },
        { title: 'LOCAL ALIGNMENT', link: 'local' },
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
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {services.map((service, index) => (
                                <Grid item xs={6} sm={4} md={4} key={index}>
                                    <Link to={`/${service.link}`} key={index}>
                                        <div className="onechip" key={index}>
                                            <h5>{service.title}</h5>
                                        </div>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>

        </div>
    )
}

export default LandingPage;
