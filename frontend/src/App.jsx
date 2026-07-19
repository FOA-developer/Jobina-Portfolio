import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Youth from './pages/YouthDigi...';
import Grit from './pages/Grit'
import Jobberman from './pages/Jobber'
import Girl from './pages/Girl'
import Jci from './pages/Jci';
import Royal from './pages/Royal'  
import Power from './pages/Power';
import Aws from './pages/Aws';
import Digital from './pages/Digital';
import Blind from './pages/Blind';
import Excel from './pages/Excel';
import Pathway from './pages/Pathway';
import ScrollToTop from './components/others/ScrollToTop';


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
        <Route path="/data_analytics" element={<Power />} />
        <Route path="/royaliwere" element={<Royal />} />
        <Route path="/aws_restart" element={<Aws />} />
        <Route path="/digital_literacy" element={<Digital />} />
        <Route path="/tech_inclusion_for_the_blind" element={<Blind />} />
        <Route path="/excel_essentials" element={<Excel />} />
        <Route path="/pathway_to_the_economy" element={<Pathway />} />
      </Routes> 
    </>
  );
}

export default App;
