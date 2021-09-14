import crs from '../../../images/nonprofits/Crime-Survivors.png';
import ccl from '../../../images/nonprofits/Child-Creativity-Lab.png';
import jff from '../../../images/nonprofits/Justice-For-Families.png';
import wm from '../../../images/nonprofits/Waymakers.png';
import och from '../../../images/nonprofits/OC-Habitats.png';
import tlp from '../../../images/nonprofits/The-Literacy-Project.png';
import afc from '../../../images/nonprofits/Abound-Food-Care.png';

const projects = {
  active: [
    {
      src: och,
      alt: 'OC Habitats incoming project',
      projectName: 'OC Habitats',
      description:
        'We will be creating digital forms for their habitat overseers to provide them with better data about their conservation efforts!',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-1-reveal-with-child-creativity-lab-e9fb41fe7835',
      npoURL: 'https://www.ochabitats.org/',
    },
    {
      src: tlp,
      alt: 'The Literacy Project incoming project',
      projectName: 'The Literacy Project',
      description:
        'We will be creating a platform to manage literacy scorecards for children enrolled in their reading program!',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-1-reveal-with-child-creativity-lab-e9fb41fe7835',
      npoURL: 'https://www.literacyproj.org/',
    },
    {
      src: afc,
      alt: 'Abound Food Care incoming project',
      projectName: 'Abound Food Care',
      description:
        'We will be creating a digital system for them to better connect with their volunteers and engage them in organizational events!',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-1-reveal-with-child-creativity-lab-e9fb41fe7835',
      npoURL: 'https://www.aboundfoodcare.org/',
    },
    {
      src: afc,
      alt: '??? incoming project',
      projectName: 'Project 4',
      description:
        'We will be doing something for our fourth project!',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-1-reveal-with-child-creativity-lab-e9fb41fe7835',
      npoURL: 'https://www.ctc-uci.com/',
    },
  ],
  inactive: [
    {
      src: jff,
      alt: 'Justice for Families past project',
      projectName: 'Justice for Families',
      description:
        'We created a mobile application for the families of incarcerated loved ones to find community and support!',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-2-reveal-with-justice-for-families-57f91752635d',
      npoURL: 'https://www.justice4families.org/',
    },
    {
      src: wm,
      alt: 'Waymakers past project',
      projectName: 'Waymakers',
      description:
        'We created a platform to electronically capture volunteer and inventory data about their different programs!',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-3-reveal-with-waymakers-4be6f2915c83',
      npoURL: 'https://waymakersoc.org/',
    },
    {
      src: ccl,
      alt: 'Child Creativity Lab past project',
      projectName: 'Child Creativity Lab',
      description:
        'We created an online waiver system and a platform to sell educational kits with instructional videos for children!',
      projectURL: 'https://medium.com/@committhechange.uci/upcoming-project-1-reveal-with-child-creativity-lab-e9fb41fe7835',
      npoURL: 'https://www.childcreativitylab.org/',
    },
    {
      src: crs,
      alt: 'Crime Survivors past project',
      projectName: 'Crime Survivors',
      description:
        'We created a website to replace their paper pamphlets detailing important resources and information for crime victims throughout Southern California!',
      // 'We created a website to replace their paper pamphlets that detail important resources and information for crime victims in different counties throughout Southern California. This project will save the organization thousands of dollars every year in printing and distribution costs, which will go directly back into helping survivors get necessity items!',
      projectURL: 'https://medium.com/@committhechange.uci/past-project-reveal-with-crime-survivors-ba557206ee10',
      npoURL: 'https://crimesurvivors.org/',
    },
  ],
};
export default projects;
