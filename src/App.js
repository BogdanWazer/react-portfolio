import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/project" element={<Project></Project>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
