import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import { animationConfigs, animationStates, transitionConfigs } from '../animationConstants';

import Portfolio from '../../../CTC_Portfolio_2023_2024.pdf';
import iglogo from '../../../images/contactUs/ig.svg';
import fblogo from '../../../images/contactUs/fb.svg';
import linkedinlogo from '../../../images/contactUs/li.svg';
import maillogo from '../../../images/contactUs/mail.svg';

import './ContactUs.css';

const SocialMediaIcons = () => {
  const cards = [
    {
      name: 'Email',
      image: maillogo,
      link: 'mailto:ctc@uci.edu',
      special: 'ctc-contact-2-email-img',
      alt: 'Send an Email to CTC',
    },
    {
      name: 'Facebook',
      image: fblogo,
      link: 'https://www.facebook.com/ctc.uci/',
      special: false,
    },
    {
      name: 'Instagram',
      image: iglogo,
      link: 'https://www.instagram.com/ctc.uci/',
      special: false,
    },
    {
      name: 'LinkedIn',
      image: linkedinlogo,
      link: 'https://www.linkedin.com/company/commit-the-change-uci/',
      special: false,
    },
  ];
  return (
    <div className="ctc-contact-2-socials">
      {cards.map((card) => (
        <a
          href={card.link}
          key={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ctc-contact-2-social-link"
          aria-label={card.alt ? card.alt : `Go to CTC's ${card.name}`}
        >
          <div className="ctc-contact-2-social-card">
            <img
              src={card.image}
              alt=""
              className={
                card.special ? card.special : 'ctc-contact-2-social-img'
              }
            />
            <div className="ctc-contact-2-social-text">{card.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

const ContactUs = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 750);
    return () => clearTimeout(load);
  }, []);

  const inlineEmail = (
    <a href="mailto:ctc@uci.edu" className="ctc-contact-1-email-link" aria-label="Send an Email to CTC">
      ctc@uci.edu
    </a>
  );

  return (
    <main>
      <motion.div
        className="ctc-contact-bg"
        variants={animationConfigs.opacity(0, 0)}
        transition={transitionConfigs.simple(loaded ? 0.5 : 0.75)}
        {...animationStates.animate}
      >
        <div className="ctc-contact-container">
          <div className="ctc-contact-1-container">
            <motion.div
              className="ctc-contact-1-leftcolumn"
              variants={animationConfigs.transformX('-100%', '-100%')}
              transition={transitionConfigs.simple(loaded ? 0.5 : 1)}
              {...animationStates.animate}
            />
            <div className="ctc-contact-1-rightcolumn">
              <motion.p
                className="ctc-contact-1-heading"
                variants={animationConfigs.transformY('-100%', '-100%')}
                transition={transitionConfigs.simple(loaded ? 0.5 : 0.4, loaded ? 0 : 0.75)}
                {...animationStates.animate}
              >
                Hey Nonprofits!
              </motion.p>
              <motion.p
                className="ctc-contact-1-subhead"
                variants={animationConfigs.transformY('-100%', '-100%')}
                transition={transitionConfigs.simple(loaded ? 0.5 : 0.4, loaded ? 0 : 0.75)}
                {...animationStates.animate}
              >
                Ready to work with us?
              </motion.p>
              <motion.p
                className="ctc-contact-1-p"
                variants={animationConfigs.transformY('100%', '100%')}
                transition={transitionConfigs.simple(0.5, loaded ? 0 : 1.1)}
                {...animationStates.animate}
              >
                We work with non-profit organizations throughout the school year
                (September 2022 - June 2023) on software projects that will have
                a meaningful, positive impact and will be a good learning
                experience for our team.
              </motion.p>
              <motion.p
                className="ctc-contact-1-p"
                variants={animationConfigs.transformY('100%', '100%')}
                transition={transitionConfigs.simple(0.5, loaded ? 0 : 1.1)}
                {...animationStates.animate}
              >
                If you would like to learn more about our organization or talk
                about how we can partner together in the future, please email us
                at
                {' '}
                {inlineEmail}
                !
              </motion.p>
              <motion.div
                className="ctc-contact-1-buttons"
                variants={animationConfigs.transformY('500%', '500%')}
                transition={transitionConfigs.simple(0.5, loaded ? 0 : 1.1)}
                {...animationStates.animate}
              >
                <a
                  href={Portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctc-contact-1-link"
                >
                  <div className="ctc-contact-1-portfolio">
                    View our portfolio
                  </div>
                </a>
                <a
                  href="mailto:ctc@uci.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctc-contact-1-link"
                >
                  <div className="ctc-contact-1-getintouch">Get in touch</div>
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="ctc-contact-2-container"
            variants={animationConfigs.transformY('-100%', '-100%')}
            transition={transitionConfigs.simple(0.5, loaded ? 0 : 0.75)}
            {...animationStates.animate}
          >
            <p className="ctc-contact-2-heading">Contact Us</p>
            <p className="ctc-contact-2-subhead">
              Want to stay in the loop? Got a question or an awesome project
              idea? Here&apos;s where to find us!
            </p>
            <SocialMediaIcons />
          </motion.div>
        </div>
        <Footer className="contact-footer" />
      </motion.div>
    </main>
  );
};

export default ContactUs;
