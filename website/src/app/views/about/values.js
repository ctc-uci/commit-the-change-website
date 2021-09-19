import community from '../../../images/about/values/community.svg';
import product from '../../../images/about/values/authentication.svg';
import authentic from '../../../images/about/values/heart-2.svg';
import initiative from '../../../images/about/values/startup.svg';
import impact from '../../../images/about/values/social-responsibility.svg';

const values = {
  top: [
    {
      title: 'Develop Community',
      src: community,
      emoji: '🤝',
      alt: 'Develop community value',
      description: `Our goal is to bring the whole organization together as one strong, helpful, and supportive community as friends
        and teammates.`,
    },
    {
      title: 'Build Enduring Products',
      src: product,
      emoji: '🛠️',
      alt: 'Build enduring products value',
      description: `We aim to build products that are maintainable and sustainable for long-term use. This involves high quality
          development, design, and documentation.`,
    },
    {
      title: 'Be Authentic',
      src: authentic,
      emoji: '💗',
      alt: 'Be authentic value',
      description: `We want every member to feel safe being honest and true to their authentic self.
        Respect other members by being open to other opinions and perspectives.`,
    },
  ],
  bottom: [
    {
      title: 'Take Initiative',
      src: initiative,
      emoji: '🚀',
      alt: 'Take initiative value',
      description: `We want every member to feel comfortable trying and learning new things.
        Failure is accepted and encouraged, as long as you continue to try again.`,
    },
    {
      title: 'Strive for Social Impact',
      src: impact,
      emoji: '👍',
      alt: 'Strive for social impact value',
      description: `We aim to come up with creative solutions when designing our products to make a difference in the community
        and strive to pick partnerships with organizations that need our help the most, thus making the largest impact.`,
    },
  ],
};

export default values;
