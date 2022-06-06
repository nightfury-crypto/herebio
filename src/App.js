import './App.css';
import SideBar from './SideBar';
import { Route, Routes } from 'react-router-dom'
import Complementary from './services/Complementary';
import NeedlemanAlgo from './services/NeedlemanAlgo';
import ContentGC from './services/ContentGC';
import SmithWaterAlgo from './services/SmithWaterAlgo';

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className='mainscreen'>
        <Routes >
          <Route path="/complementary" element={<Complementary />}>
          </Route>
          <Route path="/contentgc" element={<ContentGC />}>
          </Route>
          <Route path="/global" element={<NeedlemanAlgo />}>
          </Route>
          <Route path="/local" element={<SmithWaterAlgo />}>
          </Route>

          
        </Routes >
      </div>
    </div>
  );
}

export default App;
