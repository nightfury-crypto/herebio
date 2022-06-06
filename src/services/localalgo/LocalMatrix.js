import React, { useEffect, useRef, useState } from 'react';
import Boxes from '../globalalgo/Boxes';
import '../globalalgo/GlobalMatrix.css';

function LocalMatrix({ seq1, seq2, setBoolMatrix, gapPenalty, mismatch, matchScore }) {
    const [hi, setHeight] = useState('')
    const [wi, setWidth] = useState('')
    const [align1, setAlign1] = useState('')
    const [align2, setAlign2] = useState('')
    const [alignpipe, setAlignpipe] = useState('')
    const [score, setScore] = useState('')
    const [checkencounter, setcheckencounter] = useState(false)
    const renderRef = useRef()

    const showwholescore = (e) => {
        if (e.target.children[0]) {
            e.target.children[0].style.display = 'block';
        }
    }

    const hidewholescore = (e) => {
        if (e.target.children[0]) {
            e.target.children[0].style.display = 'none';
        }
    }

    let box = []
    let hig = 32
    let wig = 32

    useEffect(() => {
        setWidth(wig * (seq1.length + 2))
        setHeight(hig * (seq2.length + 2))
    }, [])

    let highestScore = 0
    let highestScorebox = "";
    const showMatrix = (temp) => {
        for (let i = 0; i < seq1.length + 2; i++) {
            for (let j = 0; j < seq2.length + 2; j++) {

                if (i > 1 && j === 0) {
                    let temp = i - 2

                    box.push(<Boxes key={`${i},${j}`} display={seq1[temp]} bgColor={'#1A3C40'}
                        height={hig} width={wig} />)
                }
                else if (i === 0 && j > 1) {
                    let temp = j - 2

                    box.push(<Boxes display={seq2[temp]} key={`${i},${j}`} bgColor={'#1A3C40'}
                        height={hig} width={wig} />)
                }
                else if (j === 0 && i === 0) {

                    box.push(<Boxes bgColor={'transparent'} key={`${i},${j}`}
                        height={hig} width={wig} />)
                }
                else if ((j === 1 && i === 0) || (j === 0 && i === 1)) {

                    box.push(<Boxes bgColor={'transparent'} key={`${i},${j}`}
                        height={hig} width={wig} />)
                }
                else {
                    if (i == 1 && j == 1) {

                        box.push(<Boxes key={`${i},${j}`}
                            height={hig} width={wig} display={0} bgColor={'rgb(127, 104, 151)'} />)
                    }
                    else if (i > 1 && j == 1) {

                        box.push(<Boxes key={`${i},${j}`}
                            height={hig} width={wig} display={0} bgColor={'rgb(127, 104, 151)'} val={`${i},${j}`} direction={"⬅"} />)

                    } else if (i == 1 && j > 1) {
                        box.push(<Boxes key={`${i},${j}`}
                            height={hig} width={wig} display={0} bgColor={'rgb(127, 104, 151)'} val={`${i},${j}`} direction={"⬆"} />)
                    }
                    else {
                        let digonalBox;
                        let sideBox;
                        let upperBox;
                        let boxScore;
                        let direction;
                        box.map(b => {
                            if (b.key == `${i - 1},${j - 1}`) {
                                box.map(cal => {
                                    if (cal.key == `${i - 1},${j - 1}`) {
                                        digonalBox = cal
                                    }
                                    if (cal.key == `${i},${j - 1}`) {
                                        upperBox = cal
                                    }
                                    if (cal.key == `${i - 1},${j}`) {
                                        sideBox = cal
                                    }
                                })
                                boxScore = Math.max(sideBox.props.display + gapPenalty,
                                    upperBox.props.display + gapPenalty,
                                    digonalBox.props.display + temp[i - 2][j - 2],
                                    0
                                )
                                if (highestScore > boxScore) {
                                    highestScore = highestScore
                                } else {
                                    highestScore = boxScore
                                }
                                if (boxScore == (digonalBox.props.display + temp[i - 2][j - 2])) {
                                    direction = "↖"
                                }
                                else if (boxScore == (sideBox.props.display + gapPenalty)) {
                                    direction = "⬅"
                                } else {
                                    direction = "⬆"
                                }

                            }
                        })
                        box.push(<Boxes key={`${i},${j}`} direction={direction}
                            height={hig} width={wig} display={boxScore} val={`${i},${j}`} diagonal={digonalBox.props.display} ms={temp[i - 2][j - 2]}
                            gap={gapPenalty} maxScore={boxScore} upper={upperBox.props.display} side={sideBox.props.display}
                            showwholescore={showwholescore} hidewholescore={hidewholescore} />)
                    }
                }
            }
        }
    }

    let match_matrix_check = []
    const renderAll = (seq1, seq2, callback) => {
        for (let i = 0; i < seq1.length; i++) {
            match_matrix_check.push([])
            for (let j = 0; j < seq2.length; j++) {
                if (seq1[i] == seq2[j]) {
                    match_matrix_check[i].push(matchScore)
                } else {
                    match_matrix_check[i].push(mismatch)
                }
            }
        }
        callback(match_matrix_check)
    }
    renderAll(seq1, seq2, showMatrix)

    useEffect(() => {

        let netScore = 0
        let pipe = ''
        if (align1 && align2) {
            for (let i = 0; i < align1.length; i++) {
                if (align1[i] == align2[i]) {
                    pipe = pipe + "|"
                    netScore = netScore + matchScore
                } else {
                    pipe = pipe + " "
                    if (align1[i] == " " || align2[i] == " ") {
                        netScore = netScore + gapPenalty
                    } else if (align1[i] !== align2[i]) {
                        netScore = netScore + mismatch
                    }
                }
            }
            setScore(netScore)
            setAlignpipe(pipe)
        }

    }, [align1 || align2])

    const showtrace = () => {
        let allboxes = document.querySelectorAll('.matrixbg > div')
        let a1 = ''
        let a2 = ''
        let t1 = seq1.length + 2
        let t2 = seq2.length + 2
        let addornot = false
        let addothers = false
        while (t1 > 0 || t2 > 0) {
            let check = "";
            
            for (let i = 0; i < box.length; i++) {
                if (box[i].key == `${t1 - 1},${t2 - 1}`) {
                    if (box[i].key == "1,1") {
                        allboxes[i].style.backgroundColor = "crimson"
                        break

                    } else {
                        for (let j = 0; j < allboxes.length; j++) {
                            if (box[i].key == allboxes[j].attributes[1].value) {
                                if ((highestScore == box[i].props.display) || addothers==true) {
                                    allboxes[j].style.backgroundColor = 'crimson'

                                    if (box[i].props.display == 0) {
                                        setcheckencounter(true)
                                        t1 = 0
                                        t2 = 0
                                        break
                                    }
                                    if (box[i].props.direction !== undefined) {
                                        check = box[i].props.direction
                                    }
                                    addornot = true
                                    addothers = true
                                    break
                                }
                                else {
                                    check = box[i].props.direction
                                    addornot = false
                                }
                            }
                        }
                    }
                    break
                }
            }
            if (check == "↖") {
                if (addornot) {
                    a1 = a1 + seq1[t1 - 3]
                    a2 = a2 + seq2[t2 - 3]
                    t1--
                    t2--
                } else {
                    t1--
                    t2--
                }
            } else if (check == "⬅") {
                if (addornot) {
                    a1 = a1 + seq1[t1 - 3]
                    a2 = a2 + " "
                    t1--
                    t2 = t2 - 0
                } else {
                    t1--
                    t2 = t2 - 0
                }
            } else if (check == "⬆") {
                if (addornot) {
                    a1 = a1 + " "
                    a2 = a2 + seq2[t2 - 3]
                    t1 = t1 - 0
                    t2--
                } else {
                    t1 = t1 - 0
                    t2--
                }
            }
            else {
                break
            }
        }
        setAlign1(a1)
        setAlign2(a2)
    }


    let alignment = String.raw`
        Seq1 - ${align1.split("").reverse().join("")}   
               ${alignpipe.split("").reverse().join("")}
        Seq2 - ${align2.split("").reverse().join("")}   

        ----------------------------
                Score => ${score}
        ----------------------------
    `;

    return (
        <div className='matrix'>
            <span className="arrow-back" onClick={() => setBoolMatrix(false)}><span></span></span>
            <h3>Local Alignment Matrix</h3>
            <div className="matrixbg" style={{ maxHeight: hi, maxWidth: wi }} ref={renderRef}>
                {box}
            </div>
            <button className='btn' onClick={showtrace}>Show Traceback & alignment</button>
            {(align1 && align2) && <div className="display__result">
                <pre>
                    {alignment}
                </pre>
            </div>}
        </div>
    )
}

export default LocalMatrix;