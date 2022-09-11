import React from 'react';
import './Boxes.css'

function Boxes({ display, bgColor, noBor, height, width, showwholescore, hidewholescore, diagonal, ms, gap, val, maxScore, upper, side, showZero }) {

  return (
    <>
      {(showwholescore && hidewholescore) ? (<div className='box' style={{ backgroundColor: bgColor, border: noBor, height: height, width: width }}
        onMouseOver={e => showwholescore(e)} onMouseOut={e => hidewholescore(e)} value={val}>
        {display}
        <div className="hover-show">
          <div className="showContent">
            <div className="bs">
              <h6>Digonal cell score</h6>
              <span>{diagonal}+{ms} = {diagonal + ms}</span>
            </div>

            <div className="bs">
              <h6>Upper cell score</h6>
              <span>{upper}{gap} = {upper + gap}</span>
            </div>

            <div className="bs">
              <h6>Side cell score</h6>
              <span>{side}{gap} = {side + gap}</span>
              {showZero && (<>
              <span className='showZero'></span>
              <span>0</span>
              </>) }
            </div>
            <div className="bs">
              <h6>max score</h6>
              <span>{maxScore}</span>
            </div>
          </div>

          <div className="arrow"></div>
        </div>
      </div>) : (<div className='box'
        style={{ backgroundColor: bgColor, border: noBor, height: height, width: width }} value={val}>
        {display}
      </div>)}
    </>

  )
}

export default Boxes