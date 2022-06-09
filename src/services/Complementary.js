import React, { useState } from 'react'
import './Complementary.css'

function Complementary() {
    const [seqInput, setSequenceInput] = useState('')
    const [compSeq, setCompSeq] = useState('')
    const [type, settype] = useState('DNA')
    const [outtype, setOuttype] = useState('reverse')


    const typehandle = (e) => {
        settype(e.target.value)
    }
    const outtypehandle = (e) => {
        setOuttype(e.target.value)
    }
    const complementarySubmit = () => {

        if (outtype == 'reverse') {
            setCompSeq(seqInput.toUpperCase().split("").reverse().join(""))
            return
        }
        let tempComp = ''
        if (type === 'DNA') {
            for (let i = 0; i < seqInput.length; i++) {
                if (seqInput[i].toUpperCase() === 'A') {
                    tempComp = tempComp + 'T'
                } else if (seqInput[i].toUpperCase() === 'T') {
                    tempComp = tempComp + 'A'
                } else if (seqInput[i].toUpperCase() === 'G') {
                    tempComp = tempComp + 'C'
                } else if (seqInput[i].toUpperCase() === 'C') {
                    tempComp = tempComp + 'G'
                }
                else {
                    return setCompSeq('Please! Enter valid DNA sequence.')
                }
            }
        }

        if (type === 'RNA') {
            for (let i = 0; i < seqInput.length; i++) {
                if (seqInput[i].toUpperCase() === 'A') {
                    tempComp = tempComp + 'U'
                } else if (seqInput[i].toUpperCase() === 'U') {
                    tempComp = tempComp + 'A'
                } else if (seqInput[i].toUpperCase() === 'G') {
                    tempComp = tempComp + 'C'
                } else if (seqInput[i].toUpperCase() === 'C') {
                    tempComp = tempComp + 'G'
                }
                else {
                    return setCompSeq('Please! Enter valid RNA sequence.')
                }
            }
        }
        if (outtype == 'comp') {
            setCompSeq(tempComp)
            return
        } else if (outtype == 'reversecomp') {
            setCompSeq(tempComp.split("").reverse().join(""))
            return
        }
    }
    return (
        <div className='complementary'>
            <div className="comp__top">
                <h3>COMPLEMENTARY</h3>
            </div>
            <div className="comp__bottom">
                <form action="" className='complementary__form'>
                    <label htmlFor="seqinput">Enter Sequence - </label>
                    <textarea name="" id='seqinput' className='txtArea'
                        placeholder='Enter DNA/RNA sequence'
                        value={seqInput.toUpperCase()}
                        onChange={(e) => setSequenceInput(e.target.value)}
                    ></textarea>
                    <label style={{ marginBottom: '20px' }}>--------- Options ---------</label>
                    <span className='seqoption'>
                        <label>Type of sequence - </label>
                        <label htmlFor="comp__dna">
                            <input type="radio" name="type" id="comp__dna" value="DNA" checked={type == 'DNA'} onChange={typehandle} />
                            <span>DNA</span>
                        </label>
                        <label htmlFor="comp__rna">
                            <input type="radio" name="type" id="comp__rna" value="RNA" checked={type == 'RNA'} onChange={typehandle} />
                            <span>RNA</span>
                        </label>
                    </span>
                    <span className='seqoption' style={{ marginTop: '6px' }}>
                        <label>What output - </label>
                        <label htmlFor="reverse__type">
                            <input type="radio" name="outtype" id="reverse__type" value="reverse" checked={outtype == 'reverse'} onChange={outtypehandle} />
                            <span>Reverse</span>
                        </label>
                        <label htmlFor="comp__type">
                            <input type="radio" name="outtype" id="comp__type" value="comp" checked={outtype == 'comp'} onChange={outtypehandle} />
                            <span>Complementary</span>
                        </label>

                        <label htmlFor="reverseComp__type">
                            <input type="radio" name="outtype" id="reverseComp__type" value="reversecomp" checked={outtype == 'reversecomp'} onChange={outtypehandle} />
                            <span>reverse Complementary</span>
                        </label>
                    </span>
                    {seqInput ? <input type="button" className='comp__btn' value="hit hard" onClick={complementarySubmit} /> :
                        <input type="button" className='comp__btn' style={{ background: 'transparent', cursor: 'no-drop' }} value="hit hard" onClick={complementarySubmit} disabled />}

                </form>
            </div>
            {compSeq && (<div className="comp__bottomResult">
                <hr />
                <div>
                    <div className='same'>
                        <p>COMPLEMENTARY - </p>
                        <textarea name="showResult" id="" className="resultDisplay" value={compSeq} readOnly />
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default Complementary