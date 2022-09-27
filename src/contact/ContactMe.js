import Footer from "../footer/Footer";
import "./ContactMe.css";

const ContactMe = () => {
    return (
        <div className='contact' id="policy">
            <div className="policy-wrap">
            <h1>Get In Touch!</h1>
            <p>Contact Us</p>
            <form id="contact">
                <span id="main">
                    <input className="input" name="MERGE0" type="text" placeholder="Your name" id="nameInput" required />
                    <br /><br />
                    <input className="input" name="MERGE0" type="email" placeholder="Your email" id="emailInput" required />
                    <br /><br />
                    <input className="input" name="MERGE0" type="text" placeholder="Subject" id="subjectInput" required />
                    <br /><br />
                    <textarea className="input textarea" name="MERGE0" type="text" placeholder="Message" id="subjectInput" required></textarea>
                    <br /><br />
                    <button className="cta" type="submit">Submit</button>
                </span>
            </form>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default ContactMe
