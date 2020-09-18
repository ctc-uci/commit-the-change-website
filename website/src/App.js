import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './app/components/Navbar/Nav';
import Home from './app/views/home/Home';
import About from './app/views/about/About';
import Projects from './app/views/our-work/OurWork';
import ContactUs from './app/views/contact-us/ContactUs';
import Footer from './app/components/Footer/Footer';
import topRightBlob from './images/right-blob.svg';

function App() {
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
              <Route path="/projects" exact render={() => <Projects />} />
              <Route path="/contact" exact render={() => <ContactUs />} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
