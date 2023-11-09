// --- Board ---
import michellelin from '../images/ourTeam/memberImages/michellelin.jpg';
import noah from '../images/ourTeam/memberImages/noah.png';
import justin from '../images/ourTeam/memberImages/justin.jpg';
import carly from '../images/ourTeam/memberImages/carly.jpg';
import gayathri from '../images/ourTeam/memberImages/gayathri.jpeg';
import kaila from '../images/ourTeam/memberImages/kailalong.jpeg';
import andrewlee from '../images/ourTeam/memberImages/andrewlee.jpg';
import arjunsivakumar from '../images/ourTeam/memberImages/arjunsivakumar.jpg';
import maithyle from '../images/ourTeam/memberImages/maithyle.jpg';
import kainoa from '../images/ourTeam/memberImages/kainoa.jpeg';
import emmyc from '../images/ourTeam/memberImages/emmyc.jpg';

// --- Leads ---
import madhu from '../images/ourTeam/memberImages/madhu.jpg';
import minh from '../images/ourTeam/memberImages/minhnguyen.jpg';
import michaelpien from '../images/ourTeam/memberImages/michaelpien.png';
import dang from '../images/ourTeam/memberImages/dang.jpg';
import joshlipton from '../images/ourTeam/memberImages/joshlipton.jpg';
import michelleblin from '../images/ourTeam/memberImages/michelleblin.jpg';
import ostend from '../images/ourTeam/memberImages/ostend.png';
import selina from '../images/ourTeam/memberImages/selina.jpg';
import rafael from '../images/ourTeam/memberImages/rafael.jpg';
import alyssia from '../images/ourTeam/memberImages/alyssia.jpg';
import zion from '../images/ourTeam/memberImages/zion.jpg';

// --- Members ---
import kevinwu from '../images/ourTeam/memberImages/kevinwu.jpg';
import seanfong from '../images/ourTeam/memberImages/seanfong.jpg';
import seankelman from '../images/ourTeam/memberImages/seankelman.jpg';
import bensonmanzano from '../images/ourTeam/memberImages/bensonmanzano.jpg';
// --- ------- ---

// Note for bootcamp task: The members attribute of each section is an ordered list.
// You should add your member object after the leads of your respective team,
// in alphabetical order by first name - last name.
const members = {
  board: {
    name: 'Board',
    members: [
      {
        name: 'Michelle Lin',
        position: 'President',
        linkedinURL: 'https://www.linkedin.com/in/michellelinCA',
        imageURL: michellelin,
      },
      {
        name: 'Arjun Sivakumar',
        position: 'Internal VP',
        linkedinURL: 'https://www.linkedin.com/in/arjunsvkmr/',
        imageURL: arjunsivakumar,
      },
      {
        name: 'Noah Arsala',
        position: 'External VP',
        linkedinURL: 'https://www.linkedin.com/in/noah-arsala-0324911b3/',
        imageURL: noah,
      },
      {
        name: 'Andrew Lee',
        position: 'Technical Director',
        linkedinURL: 'https://www.linkedin.com/in/andrew-lee-0641b380/',
        imageURL: andrewlee,
      },
      {
        name: 'Justin Liao',
        position: 'Technical Director',
        linkedinURL: 'https://www.linkedin.com/in/justin-liao-1949b3217/',
        imageURL: justin,
      },
      {
        name: 'Caroline Guzylak',
        position: 'Design Director',
        linkedinURL: 'https://www.linkedin.com/in/cguzylak/',
        imageURL: carly,
      },
      {
        name: 'Gayathri Yedavilli',
        position: 'Marketing Director',
        linkedinURL: 'https://www.linkedin.com/in/gayathri-yedavilli/',
        imageURL: gayathri,
      },
      {
        name: 'Kainoa Nishida',
        position: 'Treasurer',
        linkedinURL: 'https://www.linkedin.com/in/kainoa-nishida-308b68253/',
        imageURL: kainoa,
      },
      {
        name: 'Kaila Long',
        position: 'Membership Director',
        linkedinURL: 'https://www.linkedin.com/in/kaila-long-3952b7210/',
        imageURL: kaila,
      },
      {
        name: 'Maithy Le',
        position: 'Outreach Director',
        linkedinURL: 'https://www.linkedin.com/in/maithy-le',
        imageURL: maithyle,
      },
      {
        name: 'Emmy Chen',
        position: 'Outreach Director',
        linkedinURL: 'https://www.linkedin.com/in/emmy-chen-583552252',
        imageURL: emmyc,
      },
    ],
  },
  aiss: {
    name: 'Achievement Institute of STEM Scholars',
    members: [
      {
        name: 'Michael Pien',
        position: 'Tech Lead',
        linkedinURL: 'https://www.linkedin.com/in/michaelpien/',
        imageURL: michaelpien,
      },
      {
        name: 'Michelle Lin',
        position: 'Tech Lead',
        linkedinURL: 'https://www.linkedin.com/in/michellelin1/',
        imageURL: michelleblin,
      },
      {
        name: 'Selina Arjomand',
        position: 'Design Lead',
        linkedinURL: 'https://www.linkedin.com/in/selinaarjomand/',
        imageURL: selina,
      },
      {
        name: 'Alyssia Tan',
        position: 'Developer',
        linkedinURL: 'https://www.linkedin.com/in/alyssia-tan/',
        imageURL: alyssia,
      },
      {
        name: 'Sean Fong',
        position: 'Developer',
        linkedinURL: 'https://www.linkedin.com/in/seancfong/',
        imageURL: seanfong,
      },
    ],
  },
  s2t: {
    name: 'Stand Up to Trash',
    members: [
      {
        name: 'Ostend Suryajaya',
        position: 'Tech Lead',
        linkedinURL: 'https://www.linkedin.com/in/ostend-suryajaya/',
        imageURL: ostend,
      },
      {
        name: 'Dang Nguyen',
        position: 'Tech Lead',
        linkedinURL: 'https://www.linkedin.com/in/nwin/',
        imageURL: dang,
      },
      {
        name: 'Rafael Muñoz',
        position: 'Design Lead',
        linkedinURL: 'https://www.linkedin.com/in/rafael-carrillo-mu%C3%B1oz/',
        imageURL: rafael,
      },
      {
        name: 'Kevin Wu',
        position: 'Developer',
        linkedinURL: 'https://www.linkedin.com/in/kevinwu098/',
        imageURL: kevinwu,
      },
    ],
  },
  fph: {
    name: 'Feeding Pets of the Homeless',
    members: [
      {
        name: 'Madhu Sharma',
        position: 'Tech Lead',
        linkedinURL: 'https://www.linkedin.com/in/madhuxsharma/',
        imageURL: madhu,
      },
      {
        name: 'Josh Lipton',
        position: 'Tech Lead',
        linkedinURL: 'https://www.linkedin.com/in/joshua-lipton/',
        imageURL: joshlipton,
      },
      {
        name: 'Minh Nguyen',
        position: 'Design Lead',
        linkedinURL: 'https://www.linkedin.com/in/minhtnguy/',
        imageURL: minh,
      },
      {
        name: 'Sean Kelman',
        position: 'Developer',
        linkedinURL: 'https://www.linkedin.com/in/sean-kelman-633057211/',
        imageURL: seankelman,
      },
      {
        name: 'Zion Mateo',
        position: 'Developer',
        linkedinURL: 'https://www.linkedin.com/in/zionmateo/',
        imageURL: zion,
      },
      {
        name: 'Benson Manzano',
        position: 'Developer',
        linkedinURL: 'https://www.linkedin.com/in/benson-manzano/',
        imageURL: bensonmanzano,
      },
    ],
  },
};

export default members;
