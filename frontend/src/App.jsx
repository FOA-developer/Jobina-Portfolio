import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Youth from './pages/YouthDigi...';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youth" element={<Youth />} />
      </Routes> 
    </>
  );
}

export default App;
