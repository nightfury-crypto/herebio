import React, { useState } from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

function SideBar() {
    const [hamisOpen, sethamisOpen] = useState(false)

    const handlehamburger = (e) => {
        if (e.target.className.includes('hamactive') === true || e.target.className.includes('lineactive') == true) {
            sethamisOpen(false)
        } else {
            sethamisOpen(true)
        }
    }

    const closesidebar = () => {
        if (hamisOpen) {
            sethamisOpen(false)
        }
    }

    return (
        <>
            <div className={`hamburger ${hamisOpen ? 'hamactive' : ''}`} onClick={handlehamburger}>
                <div className="ham-wrap">
                    <div className={`line1 ${hamisOpen ? 'lineactive' : ''}`}></div>
                    <div className={`line2 ${hamisOpen ? 'lineactive' : ''}`}></div>
                    <div className={`line3 ${hamisOpen ? 'lineactive' : ''}`}></div>
                </div>
            </div>
            <div className={`sidebar__wrap ${hamisOpen ? '' : 'sideclose'}`} onClick={closesidebar}>

                <div className={`sidebar ${hamisOpen ? '' : 'sideclose'}`}>
                    <Link to="/">
                        <div className="bar barhead">
                            Here Bio
                        </div>
                    </Link>

                    <Link to="/complementary" onClick={closesidebar}>
                        <div className="bar" style={{ marginTop: '30px' }}>
                            complementary
                        </div>
                    </Link>

                    <Link to="/contentgc" onClick={closesidebar}>
                        <div className="bar">
                            GC content
                        </div>
                    </Link>

                    <Link to="/global" onClick={closesidebar}>
                        <div className="bar">
                            Global Alignment
                        </div>
                    </Link>

                    <Link to="/local" onClick={closesidebar}>
                        <div className="bar">
                            Local Alignment
                        </div>
                    </Link>
                    <Link to="/sanger" onClick={closesidebar}>
                        <div className="bar">
                            Sanger Sequencing
                        </div>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default SideBar;