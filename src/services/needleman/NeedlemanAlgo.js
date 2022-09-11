import React, { useState } from 'react';
import GlobalMatrix from './globalalgo/GlobalMatrix';
import './NeedlemanAlgo.css';

function NeedlemanAlgo() {
    const [seqInput1, setSequenceInput1] = useState('')
    const [seqInput2, setSequenceInput2] = useState('')
    const [boolMatrix, setBoolMatrix] = useState(false)
    const [matchNum, setMatchNum] = useState(5)
    const [mismatchNum, setMismatchNum] = useState(-1)
    const [gapNum, setGapNum] = useState(-3)

    const matrixhandle = () => {
        if (seqInput1 && seqInput2 && mismatchNum && matchNum && gapNum) {
            return setBoolMatrix(true)
        }
    }

    if (boolMatrix) {
        return <GlobalMatrix 
        seq1={seqInput1.toUpperCase().substring(0, 29)} seq2={seqInput2.toUpperCase().substring(0, 16)} 
        setBoolMatrix={setBoolMatrix} 
        matchScore={parseInt(matchNum)} mismatch={parseInt(mismatchNum)} gapPenalty={parseInt(gapNum)} />
    } else {
        return (
            <div className="contentgc">
                <div className="contentgc__top">
                    <h3 className="needleheading" style={{ textTransform: 'capitalize' }}>Needleman-Wunsch algorithm</h3>
                </div>

                <div className="contentgc__bottom">
                    <form className='global__form'>
                        <label htmlFor="seqinput1">Enter Sequence 1 - </label>
                        <textarea name="seq1" id='seqinput1' className='txtArea needle-seq1'
                            placeholder='Enter sequence1 - 
                            (max seq length 15)'
                            value={seqInput1.toUpperCase()}
                            onChange={(e) => setSequenceInput1(e.target.value)}
                        ></textarea>

                        <label htmlFor="seqinput2">Enter Sequence 2 - </label>
                        <textarea name="seq2" id='seqinput2' className='txtArea needle-seq2'
                            placeholder='Enter sequence2 -
                            (max seq length 15)'
                            value={seqInput2.toUpperCase()}
                            onChange={(e) => setSequenceInput2(e.target.value)}
                        ></textarea>
                        <label style={{ marginBottom: '20px' }}>--------- Options ---------</label>
                        <span className='seqoption needle-options'>

                            <label htmlFor="match_score" className='pack'>
                                <span style={{ marginRight: '10px' }}>Match Score</span>
                                <input type="number" min="0" max="100" id="match_score" className='size'
                                value={matchNum}
                                onChange={(e) => setMatchNum(e.target.value)} />
                            </label>

                            <label htmlFor="mismatch_penalty" className='pack'>
                                <span style={{ marginRight: '10px' }}>Mismatch penalty</span>
                                <input type="number"  id="mismatch_penalty" className='size'
                                value={mismatchNum}
                                onChange={(e) => setMismatchNum(e.target.value)} />
                            </label>

                            <label htmlFor="gap_penalty" className='pack'>
                                <span style={{ marginRight: '10px' }}>Gap penalty</span>
                                <input type="number"  id="gap_penalty" className='size' 
                                value={gapNum}
                                onChange={(e) => setGapNum(e.target.value)}/>
                            </label>
                        </span>

                        <span className='default'>
                            <label>By default - <span>match = 5 || mismatch = -1 || gap = -3</span> </label>
                        </span>

                        <input type="button" className='comp__btn' value="hit hard" onClick={matrixhandle} />
                    </form>
                </div>

            </div>
        )
    }


}

export default NeedlemanAlgo