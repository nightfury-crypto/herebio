import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrap">
                <h5>Biological Tools &copy; KARNAIL SINGH CHOUDHARY</h5>
                <span> 
                    <Link to="/privacy">
                        <span >Privacy Policy</span>
                    </Link>
                    <span style={{margin: '0 2px'}}>|</span>
                    <Link to="/terms">
                        <span >Terms and Conditions</span>
                    </Link>
                </span> 
            </div>
        </div>
    )
}

export default Footer;
