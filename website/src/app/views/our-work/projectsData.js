// import ctc from '../../../images/nonprofits/CTC-Placeholder.png';
import placeholder from '../../../images/nonprofits/project-placeholder.png';
import crs from '../../../images/nonprofits/Crime-Survivors.png';
import ccl from '../../../images/nonprofits/Child-Creativity-Lab.png';
import jff from '../../../images/nonprofits/Justice-For-Families.png';
import wm from '../../../images/nonprofits/Waymakers.png';
import och from '../../../images/nonprofits/OC-Habitats.png';
import tlp from '../../../images/nonprofits/The-Literacy-Project.png';
import afc from '../../../images/nonprofits/Abound-Food-Care.png';
import fya from '../../../images/nonprofits/Find-Your-Anchor.png';
import gins from '../../../images/nonprofits/Get-Inspired.png';

const projects = {
  active: [
    {
      start: 'Fall 2022',
      end: 'Spring 2023',
      src: gins,
      alt: 'Get Inspired',
      projectName: 'Get Inspired',
      description:
        'We will be building a new database system for them to better organize and report their Pismo Clam restoration data!',
      projectURL: '',
      npoURL: 'https://getinspiredinc.org/',
    },
    {
      start: 'Fall 2022',
      end: 'Spring 2023',
      src: placeholder,
      alt: 'Incoming project #1',
      projectName: 'To Be Announced 🚧',
      description:
        'Check back on our website and social media for our project reveals in the coming weeks!',
      projectURL: '',
      npoURL: 'https://www.ctc-uci.com/',
    },
    {
      start: 'Fall 2022',
      end: 'Spring 2023',
      src: placeholder,
      alt: 'Incoming project #3',
      projectName: 'To Be Announced 🚧',
      description:
        'Check back on our website and social media for our project reveals in the coming weeks!',
      projectURL: '',
      npoURL: 'https://www.ctc-uci.com/',
    },

  ],
  inactive: [
    {
      start: 'Fall 2021',
      end: 'Spring 2022',
      src: och,
      alt: 'OC Habitats project',
      projectName: 'OC Habitats',
      description:
        'We constructed digital forms for their habitat overseers to provide them with better data on their conservation efforts!',
      projectURL:
        'https://github.com/ctc-uci/oc-habitats-frontend',
      npoURL: 'https://www.ochabitats.org/',
    },
    {
      start: 'Fall 2021',
      end: 'Spring 2022',
      src: tlp,
      alt: 'The Literacy Project project',
      projectName: 'The Literacy Project',
      description:
        'We created a platform to manage literacy scorecards for children enrolled in their award-winning reading program!',
      projectURL:
        'https://github.com/ctc-uci/the-literacy-project-frontend',
      npoURL: 'https://www.literacyproj.org/',
    },
    {
      start: 'Fall 2021',
      end: 'Spring 2022',
      src: fya,
      alt: 'Find Your Anchor project',
      projectName: 'Find Your Anchor',
      description:
        'We made a map for them to track where their mental health anchor boxes are traveling throughout the world!',
      projectURL:
        'https://github.com/ctc-uci/find-your-anchor-frontend',
      npoURL: 'https://findyouranchor.us/',
    },
    {
      start: 'Fall 2021',
      end: 'Fall 2022',
      src: afc,
      alt: 'Abound Food Care project',
      projectName: 'Abound Food Care',
      description:
        'We created a digital system for them to better connect with their volunteers and engage them in events!',
      projectURL:
        'https://github.com/ctc-uci/abound-food-care-frontend',
      npoURL: 'https://www.aboundfoodcare.org/',
    },
    {
      start: 'Fall 2020',
      end: 'Spring 2021',
      src: jff,
      alt: 'Justice for Families past project',
      projectName: 'Justice for Families',
      description:
        'We created a mobile application for the families of incarcerated loved ones to find community and support!',
      mediumURL:
        'https://medium.com/@committhechange.uci/upcoming-project-2-reveal-with-justice-for-families-57f91752635d',
      npoURL: 'https://www.justice4families.org/',
      projectURL: 'https://github.com/ctc-uci/justice-for-families',
    },
    {
      start: 'Fall 2020',
      end: 'Spring 2021',
      src: wm,
      alt: 'Waymakers past project',
      projectName: 'Waymakers',
      description:
        'We created a platform to electronically capture volunteer and inventory data about their different programs!',
      mediumURL:
        'https://medium.com/@committhechange.uci/upcoming-project-3-reveal-with-waymakers-4be6f2915c83',
      npoURL: 'https://waymakersoc.org/',
      projectURL: 'https://github.com/ctc-uci/waymakers',
    },
    {
      start: 'Fall 2020',
      end: 'Spring 2021',
      src: ccl,
      alt: 'Child Creativity Lab past project',
      projectName: 'Child Creativity Lab',
      description:
        'We created an online waiver system and a platform to sell educational kits with instructional videos for children!',
      mediumURL:
        'https://medium.com/@committhechange.uci/upcoming-project-1-reveal-with-child-creativity-lab-e9fb41fe7835',
      npoURL: 'https://www.childcreativitylab.org/',
      projectURL: 'https://github.com/ctc-uci/ccl-videos',
    },
    {
      start: 'Spring 2020',
      end: 'Summer 2020',
      src: crs,
      alt: 'Crime Survivors past project',
      projectName: 'Crime Survivors',
      description:
        'We created a website to replace their paper pamphlets with resources and information for crime victims!',
      mediumURL:
        'https://medium.com/@committhechange.uci/past-project-reveal-with-crime-survivors-ba557206ee10',
      npoURL: 'https://crimesurvivors.org/',
      projectURL: 'https://github.com/ctc-uci/crime-survivors',
    },
  ],
};
export default projects;
