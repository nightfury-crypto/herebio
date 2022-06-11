import './App.css';
import SideBar from './SideBar';
import { Route, Routes } from 'react-router-dom'
import Complementary from './services/Complementary';
import NeedlemanAlgo from './services/NeedlemanAlgo';
import ContentGC from './services/ContentGC';
import SmithWaterAlgo from './services/SmithWaterAlgo';

function App() {
  const getheight = window.innerHeight

  return (
    <div className="app">
      <SideBar />
      <div className='mainscreen' style={{height: getheight}}>
        <Routes >
          <Route path="/complementary" element={<Complementary />}>
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
