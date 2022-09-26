import './App.css';
import SideBar from './sidebar/SideBar';
import { Route, Routes } from 'react-router-dom'
import Complementary from './services/complementary/Complementary';
import SmithWaterAlgo from './services/smithwaterman/SmithWaterAlgo';
import NeedlemanAlgo from './services/needleman/NeedlemanAlgo';
import ContentGC from './services/gccontent/ContentGC';
import SangerSeq from './services/sanger-seq/SangerSeq';
import PrivacyPolicy from './privacypolicy/PrivacyPolicy';
import LandingPage from './landingpage/LandingPage';
import Footer from './footer/Footer';


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
          {/* privacy policy */}
          <Route path="/privacy" element={<PrivacyPolicy />}>
          </Route>
          {/* complementary */}
          <Route path="/complementary" element={<Complementary />}>
          </Route>
          {/* <Route path="/sanger" element={<SangerSeq />}>
          </Route> */}
          <Route path="/contentgc" element={<ContentGC />}>
          </Route>
          <Route path="/global" element={<NeedlemanAlgo />}>
          </Route>
          <Route path="/local" element={<SmithWaterAlgo />}>
          </Route>
          <Route path="/" element={<LandingPage />}>
          </Route>
        </Routes >
      </div>
      <Footer />
    </div>
  );
}

export default App;
