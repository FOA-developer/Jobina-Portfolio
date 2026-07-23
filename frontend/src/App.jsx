import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Youth from './pages/YouthDigi...';
import Grit from './pages/Grit'
import Jobberman from './pages/Jobber'
import Girl from './pages/Girl'
import Jci from './pages/Jci';
import Royal from './pages/Royal'  
import Blind from './pages/Blind';
import Pathway from './pages/Pathway';
import ScrollToTop from './components/others/ScrollToTop';
import Edo from './pages/Edo';
import Seg from './pages/Seg';
import Ngcare from './pages/Ngcare';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youth" element={<Youth />} />
        <Route path="/jobberman" element={<Jobberman />} />
        <Route path="/gritin_ai_conference" element={<Grit />} />
        <Route path="/girllead" element={<Girl />} />
        <Route path="/jcin-uniben" element={<Jci />} />
        <Route path="/royaliwere" element={<Royal />} />
        <Route path="/tech_inclusion_for_the_blind" element={<Blind />} />
        <Route path="/pathway_to_the_economy" element={<Pathway />} />
        <Route path="/edobessto" element={<Edo />} />
        <Route path="/se4g" element={<Seg />} />
        <Route path="/ng_cares" element={<Ngcare />} />
      </Routes> 
    </>
  );
}

export default App;
