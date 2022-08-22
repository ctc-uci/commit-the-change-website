import React, { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import membersData from "./members";
import LinkedIn from "../../../images/about/linkedin.svg";
import Footer from "../../components/Footer/Footer";

import "./OurTeam.css";

const mapMembersToCards = members => (
  <motion.div
    className="ctc-ourteam-cards"
    key={members}
    initial={{ x: -500 }}
    animate={{ x: 0 }}
    exit={{ x: 500 }}
    transition={{ duration: 0.5 }}
  >
    {members?.map((member) => (
      <motion.div
        key={`card-${member.name}`}
        className="ctc-ourteam-card"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0, height: 0, width: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          alt={`${member.name}`}
          className="ctc-ourteam-card-photo"
          src={member.imageURL}
        />
        <p className="ctc-ourteam-card-name">{member.name}</p>
        <div className="ctc-ourteam-card-bottom-row">
          <p className="ctc-ourteam-card-pos">{member.position}</p>
          <a
            className="ctc-ourteam-card-link"
            href={member.linkedinURL}
            target="_blank noreferrer noopener"
          >
            <img
              alt={`${member.name} LinkedIn`}
              className="ctc-ourteam-card-linkedin"
              src={LinkedIn}
            />
          </a>
        </div>
        <div className="ctc-ourteam-card-overlay" />
      </motion.div>
    ))}
  </motion.div>
);

const OurTeam = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 750);
    return () => clearTimeout(load);
  }, []);

  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(null);
  const [currentMembers, setCurrentMembers] = useState([]);
  useEffect(() => {
    if (!membersData) {
      return;
    }
    setTabs(Object.keys(membersData));
  }, []);
  useEffect(() => {
    setCurrentTab(tabs[0]);
  }, [tabs]);
  useEffect(() => {
    if (!currentTab || !membersData) {
      return;
    }
    setCurrentMembers(membersData[currentTab].members);
  }, [currentTab]);

  return (
    <main>
      <motion.div
        className="ctc-ourteam-bg"
        initial={{
          rotate: -10,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}
        exit={{
          rotate: -5,
          opacity: 0,
          scale: 0.8,
        }}
        transition={{ duration: loaded ? 0.25 : 0.5 }}
      >
        <div className="ctc-ourteam-container">
          <motion.h1
            className="ctc-ourteam-header"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 1,
              type: "spring",
              bounce: 0.2,
            }}
          >
            Meet the Team
          </motion.h1>
          <div className="ctc-ourteam-centered-container">
            <div className="ctc-ourteam-tabs">
              {tabs.map((tab) => (
                <motion.div
                  key={tab}
                  className={`ctc-ourteam-tab ${tab} ${
                    tab === currentTab && "ctc-ourteam-tab-active"
                  }`}
                  onClick={() => setCurrentTab(tab)}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.25 }}
                >
                  {membersData[tab].name}
                </motion.div>
              ))}
            </div>
          </div>
          <AnimatePresence exitBeforeEntry>
            <div className="ctc-ourteam-centered-container">
              {mapMembersToCards(currentMembers)}
            </div>
          </AnimatePresence>
        </div>
        <Footer className="ourteam-footer" />
      </motion.div>
    </main>
  );
};

export default OurTeam;
