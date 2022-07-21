import React, { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import membersData from './members';

import './OurTeam.css';

const mapMembersToCards = members => members.map(member => (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.2}}
    >
        Hi
    </motion.div>
));

const OurTeam = () => {
    const [tabs, setTabs] = useState([]);
    const [currentTab, setCurrentTab] = useState(null);
    useEffect(() => {
        setTabs(Object.keys(membersData));
    }, []);
    useEffect(() => {
        setCurrentTab(tabs[0]);
    }, [tabs]);

    return (
        <main>
            <motion.div
                className="ctc-ourteam-1-bg"
                initial={{width: 0, height: 0}}
                animate={{width: "100%", height: "100vh"}}
                exit={{x: "100%", y: "100%"}}
                transition={{duration: 1}}
            >
                <div style={{height: "100vh", width: "100%"}} />
            </motion.div>
        </main>
    )

};

export default OurTeam;