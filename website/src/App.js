import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import {
  useLocation,
  Routes,
  Route,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Nav from './app/components/Navbar/Nav';
import Redirect from './app/components/Redirect/Redirect';
import Home from './app/views/home/Home';
import About from './app/views/about/About';
import Apply from './app/views/apply/Apply';
import Projects from './app/views/our-work/OurWork';
import Team from './app/views/our-team/OurTeam';
import ContactUs from './app/views/contact-us/ContactUs';

const App = () => {
  ReactGA.initialize('UA-178250253-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const location = useLocation();

  return (
    <>
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Nav />
            <AnimatePresence exitBeforeEnter>
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/discord" element={<Redirect url="https://discord.gg/bNTTT83Kgk" />} />
                <Route path="*" element={<Redirect url="/" />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
