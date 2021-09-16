import sydneyImage from '../../../images/apply/experiences/sydney.png';
import sonaliImage from '../../../images/apply/experiences/sonali.png';
import rostamImage from '../../../images/apply/experiences/rostam.png';

const experiences = [
  {
    src: sydneyImage,
    alt: 'Image of Sydney',
    name: 'Sydney Chiang',
    position: 'Developer, Justice for Families',
    experience: '"A technical challenge I had working on the iOS app was understanding nested views and using those with a tab bar. For example, if you click through to people’s profiles, then their posts, then their profiles from the main feed, you would get three different navigation bars stacked on top of each other. Eventually, I was able to successfully display only one navigation bar at a time by adjusting the locations of where the views were created."',
  },
  {
    src: sonaliImage,
    alt: 'Image of Sonali',
    name: 'Sonali Chellappa',
    position: 'Designer, Child Creativity Lab',
    experience: '"One accomplishment we made is making remote learning easier for children and parents through the video platform we created! CCL has not been able to host in-person workshops over the past year, resulting in students missing out on the hands-on learning experience that CCL offers. However, giving them access to these workshops online in the form of interactive lessons has allowed them to learn and explore STEAM topics at home!"',
  },
  {
    src: rostamImage,
    alt: 'Image of Rostam',
    name: 'Rostam Vakhshoori',
    position: 'Developer, Waymakers',
    experience: '"Another issue was the lack of communication between designers and developers which we combated through having meetings with everyone to get better feedback from both sides. Overall, I can confidently say that everyone got a good understanding of working in a startup-like environment while learning about key tools/workflows to become a software engineer."',
  },
];

export default experiences;
