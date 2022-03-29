import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Services from './pages/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>

      <Router>
        <Nav />
        <Sidebar />

        <Routes>
          <Route exact path='/' element={<Homepage />} />

          <Route path='/services' element={<Services />} />
          {/* <Route path='/contact' element={<Homepage />} /> */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>



    </>
  );
}

export default App;
