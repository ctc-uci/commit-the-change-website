import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './app/components/Navbar/Nav';
import Home from './app/views/home/Home';
import About from './app/views/about/About';
import Apply from './app/views/apply/Apply';
import Projects from './app/views/our-work/OurWork';
import ContactUs from './app/views/contact-us/ContactUs';
import Footer from './app/components/Footer/Footer';
import topRightBlob from './images/navbar/nav-blob.svg';

function App() {
  ReactGA.initialize('UA-178250253-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <img className="top-blob" src={topRightBlob} alt="blob" />
            <Nav />
            <Switch>
              <Route path="/" exact render={() => <Home />} />
              <Route path="/about" exact render={() => <About />} />
              <Route path="/apply" exact render={() => <Apply />} />
              <Route path="/projects" exact render={() => <Projects />} />
              <Route path="/contact" exact render={() => <ContactUs />} />
              <Route path="/discord" exact render={() => window.location.replace('https://discord.gg/bNTTT83Kgk')} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
