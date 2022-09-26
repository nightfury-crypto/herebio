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
                    <p>pradhankarnail@gmail.com</p>
                </span> 
            </div>
        </div>
    )
}

export default Footer;
