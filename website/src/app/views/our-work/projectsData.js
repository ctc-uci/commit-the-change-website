import crimesurvivors from '../../../images/nonprofits/our-work-crime-survivors.svg';
import ccl from '../../../images/nonprofits/Child-Creativity-Lab.png';
import jff from '../../../images/nonprofits/Justice-For-Families.png';
import wm from '../../../images/nonprofits/Waymakers.png';

const projects = {
  active: [
    {
      src: ccl,
      alt: 'Child Creativity Lab incoming project',
      projectName: 'Child Creativity Lab',
      description:
        'We are creating an online waiver system and a platform to sell educational kits for children.',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-1-reveal-with-child-creativity-lab-e9fb41fe7835',
      npoURL: 'https://www.childcreativitylab.org/',
    },
    {
      src: jff,
      alt: 'Justice for Families incoming project',
      projectName: 'Justice for Families',
      description:
        'We are creating a mobile application for the families of incarcerated loved ones to find community and support.',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-2-reveal-with-justice-for-families-57f91752635d',
      npoURL: 'https://www.justice4families.org/',
    },
    {
      src: wm,
      alt: 'Waymakers incoming project',
      projectName: 'Waymakers',
      description:
        'We are creating a platform to electronically capture volunteer and inventory data about their different programs.',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-3-reveal-with-waymakers-4be6f2915c83',
      npoURL: 'https://waymakersoc.org/',
    },
  ],
  inactive: [
    {
      src: crimesurvivors,
      alt: 'Crime Survivors past project',
      projectName: 'Crime Survivors',
      description:
        'We created a website to replace their paper pamphlets that detail important resources and information for crime victims in different counties throughout Southern California. This project will save the organization thousands of dollars every year in printing and distribution costs, which will go directly back into helping survivors get necessity items.',
      projectURL: 'https://google.com',
      npoURL: 'https://crimesurvivors.org/',
    },
  ],
};
export default projects;
