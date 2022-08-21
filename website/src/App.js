import React from "react";
import "./App.css";
import ReactGA from "react-ga";
import { useLocation, BrowserRouter as Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

import Nav from "./app/components/Navbar/Nav";
import Home from "./app/views/home/Home";
import About from "./app/views/about/About";
import Apply from "./app/views/apply/Apply";
import Projects from "./app/views/our-work/OurWork";
import Team from "./app/views/our-team/OurTeam";
import ContactUs from "./app/views/contact-us/ContactUs";
import Blueprint from "./app/views/blueprint/Blueprint";

const App = () => {
  ReactGA.initialize("UA-178250253-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  const location = useLocation();

  return (
    <>
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Nav />
            <AnimatePresence exitBeforeEnter>
              <Switch key={location.pathname} location={location}>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/about" exact render={() => <About />} />
                <Route path="/apply" exact render={() => <Apply />} />
                <Route path="/projects" exact render={() => <Projects />} />
                <Route path="/team" exact render={() => <Team />} />
                <Route path="/contact" exact render={() => <ContactUs />} />
                <Route path="/discord" exact render={() => window.location.replace('https://discord.gg/bNTTT83Kgk')} />
                <Route path="/blueprint" exact render={() => <Blueprint />} />
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
