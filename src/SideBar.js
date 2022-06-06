import React from 'react'
import './SideBar.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function SideBar() {


    return (
        <div className='sidebar'>
            <div className="bar barhead">
                toothy Bio
            </div>

            <Link to="/complementary">
                <div className="bar" style={{ marginTop: '30px' }}>
                    complementary
                </div>
            </Link>

            <Link to="/contentgc">
                <div className="bar">
                    GC content
                </div>
            </Link>

            <Link to="/global">
                <div className="bar">
                    Global Alignment
                </div>
            </Link>

            <Link to="/local">
                <div className="bar">
                    Local Alignment
                </div>
            </Link>

        </div>
    )
}

export default SideBar;