import { useLocation } from "react-router-dom";

export const pathnamesToPages = {
  '/': 'Home',
  '/about': 'About Us',
  '/projects': 'Projects',
  '/team': 'Our Team',
  '/contact': 'Contact',
  '/apply': 'Apply',
};

export const getPageLinkInfo = () => {
  const { pathname } = useLocation();

  // event listener to scroll to top of the page when the user presses the link for the corresponding page
  const getOnClickListener = (linkPath) => () => {
    if (linkPath === pathname) {
      // as the motion.div's on each page is what's actually causing y-overflows.
      // we need to scroll to the top of that element instead of the document/body
      document.querySelector('main').firstChild.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return Object.entries(pathnamesToPages).map(([linkPath, linkPageName]) => [linkPath, linkPageName, getOnClickListener(linkPath)]);
};
