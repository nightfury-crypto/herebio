import './App.css';
import SideBar from './sidebar/SideBar';
import { Route, Routes } from 'react-router-dom'
import Complementary from './services/complementary/Complementary';
import SmithWaterAlgo from './services/smithwaterman/SmithWaterAlgo';
import NeedlemanAlgo from './services/needleman/NeedlemanAlgo';
import ContentGC from './services/gccontent/ContentGC';
import SangerSeq from './services/sanger-seq/SangerSeq';


function App() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // on resize
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <div className="app">
      <SideBar />
      <div className='mainscreen'>
        <Routes >
          <Route path="/complementary" element={<Complementary />}>
          </Route>
          <Route path="/sanger" element={<SangerSeq />}>
          </Route>
          <Route path="/contentgc" element={<ContentGC />}>
          </Route>
          <Route path="/global" element={<NeedlemanAlgo />}>
          </Route>
          <Route path="/local" element={<SmithWaterAlgo />}>
          </Route>
          <Route path="/"
            element={<div className='mainpage'>
              <div className="mainstart">
                <h1>HERE BIO</h1>
                <h4>It's a website where you can find some tools related to biology</h4>
                <h5>Select the service from the sidebar.</h5>
              </div>
            </div>}>
          </Route>
        </Routes >
      </div>
    </div>
  );
}

export default App;
