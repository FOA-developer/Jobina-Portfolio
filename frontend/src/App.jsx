import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Youth from './pages/YouthDigi...';
import Grit from './pages/Grit'
import Jobber from './pages/Jobber'
import Girl from './pages/Girl'
import Jci from './pages/Jci';
import Royal from './pages/Royal'  


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youth" element={<Youth />} />
        <Route path="/jobberman" element={<Jobber />} />
        <Route path="/gritin_ai_conference" element={<Grit />} />
        <Route path="/girllead" element={<Girl />} />
        <Route path="/jcin-uniben" element={<Jci />} />
        <Route path="/royaliwere" element={<Royal />} />
      </Routes> 
    </>
  );
}

export default App;
