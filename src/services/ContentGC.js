import React, { useState } from 'react';
import './ContentGC.css'

function ContentGC() {

    const [seqInput, setSequenceInput] = useState('')
    const [gcCal, setgcCal] = useState(0)
    const [atCal, setatCal] = useState(0)

    const contentcalculate = () => {
        let A = 0;
        let T = 0;
        let G = 0;
        let C = 0;

        for (let i = 0; i < seqInput.toUpperCase().length; i++) {
            if (seqInput[i].toUpperCase() == 'G') {
                G++
            } else if (seqInput[i].toUpperCase() == 'A') {
                A++
            } else if (seqInput[i].toUpperCase() == 'C') {
                C++
            } else if (seqInput[i].toUpperCase() == 'T') {
                T++
            } else {
                alert('Enter valid sequence')
                return
            }
        }
        let gc = G + C
        let at = A + T
        setgcCal((gc / seqInput.length) * 100)
        setatCal((at / seqInput.length) * 100)
    }

    return (
        <div className="contentgc">
            <div className="contentgc__top">
                <h3>GC/AT content %</h3>
            </div>

            <div className="contentgc__bottom">
                <form action="" className='complementary__form'>
                    <label htmlFor="seqinput">Enter Sequence - </label>
                    <textarea name="" id='seqinput' className='txtArea'
                        cols="60" rows="10"
                        placeholder='Enter DNA/RNA sequence'
                        value={seqInput.toUpperCase()}
                        onChange={(e) => setSequenceInput(e.target.value)}
                    ></textarea>
                    <input type="button" className='comp__btn' value="hit hard" onClick={contentcalculate} />
                </form>
            </div>

            {(gcCal || atCal) ? <div className="comp__bottomResult">
                <hr />
                <div>
                    <div className='same gcsame'>
                        <p>OUTPUT </p>
                        <span>GC content - <span> {String(gcCal).substring(0, 5)}%</span></span>
                        <span>AT content - <span> {String(atCal).substring(0, 5)}%</span></span>
                    </div>
                </div>
            </div> : <></>}
        </div>
    )
}

export default ContentGC;