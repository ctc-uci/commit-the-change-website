import React from 'react';

const faq = {
  current: [
    {
      question: "Who can join Commit the Change and work on the projects?",
      answer:
        "We look for passionate, committed UC Irvine students who are interested in learning new technical skills by working on projects for non-profit organizations with other like-minded peers. Ideally, students would be in an ICS or related major, but if not, they are expected to have skills to back themselves up. There are no specific technical requirements, but it definitely helps to have something that demonstrates your initiative to learn and be involved!",
    },
    {
      question:
        "If I am accepted to join Commit the Change, how will we be matched to a project and how long is the commitment for?",
      answer:
        (<>
          Once accepted into Commit the Change, each member fills out a preference form to be
          matched with a project that they will get to work on for the entire school year.
          <b>{' '}You should be prepared to commit 8-10 hours a week for the entire school year</b>
          {' '}(October 2022 - June 2023), excluding school breaks and certain periods such as finals week.
        </>),
    },
    {
      question:
        "Will Commit the Change consist of in-person or virtual events?",
      answer:
        (<>
          <b>We are planning to host a majority of our events in person for the 2022-2023 school year.</b>
          <p className="faq-p">
            However, in the case that university and/or CDC guidelines for gatherings are
            revised, we will plan accordingly to move events to an online or hybrid format.
          </p>
        </>),
    },
    {
      question: "What is a coffee chat?",
      answer:
        "A coffee chat is our way to get to know you better and for you to learn more about our organization in a more casual setting. Rather than your typical interviews or preparing technical challenges, we chose coffee chats so that our recruitment can be less daunting and more friendly to interested students!",
    },
    {
      question:
        "I’m not sure if I should join because I haven’t had any internships or lots of experience.",
      answer:
        (<>
          Don't worry, there is no required internship or experience level qualification!
          Here at Commit the Change, we know what it's like to think, "I don't know if I
          can do this," and we're here to help you overcome that feeling especially if you're just
          starting out in development or design. We're looking for people who aren't afraid
          to take initiative, are driven to learn and grow continuously, and use failure
          as an opportunity to learn and do better.
          <p className="faq-p">
            This year, we are also planning to host an educational bootcamp for both
            developers and designers so that new members can learn relevant skills
            for their role before starting work on their projects!
          </p>
        </>),
    },
    {
      question:
        "What will I be doing in this club exactly?",
      answer: 
        (<>
          Members working on an NPO project will collaborate together over the course of
          the school year to build an app that will solve a given problem for their partner
          nonprofit. They will also attend meetings to plan, review, and demo parts of these
          apps to fellow club members, their project teams, and representatives from their 
          NPO from time to time.
          <p className="faq-p">
            The general responsibilities for the different individual roles can be found{' '}
            <a href="/apply#roles" className="faq-link">here</a>
            ! 
          </p>
        </>),
    },
  ],
  past: [
    {
      question: "Who can join Commit the Change and work on the projects?", // F2020
      answer:
        "We are looking for passionate, committed, UC Irvine students with an interest in learning new technical skills by working on projects for non-profit organizations with other like-minded peers. Ideally, students would be in an ICS or related major, but if not, they are expected to have skills to back themselves up. There are no specific technical experience requirements, but it definitely helps to have something that demonstrates your initiative to learn and be involved! We're currently seeking Designers and Developers for the upcoming school year, so if this sounds like you, don't hesitate to apply!",
    },
    {
      question: "Who can join Commit the Change and work on the projects?", // F2021
      answer:
        "We look for passionate, committed UC Irvine students who are interested in learning new technical skills by working on projects for non-profit organizations with other like-minded peers. Ideally, students would be in an ICS or related major, but if not, they are expected to have skills to back themselves up. There are no specific technical experience requirements, but it definitely helps to have something that demonstrates your initiative to learn and be involved!",
    },
    {
      question: "How do I join a Commit the Change project team?",
      answer:
        "Fill out our application! It's a simple form and a chance to pitch yourself to our organization. Some things we ask about are your level of experience, your reasons for applying, and more information about you, your studies, and your interests. Once all the applications are in, the Recruitment committee will reach out to you to schedule a coffee chat — not an interview, but a way for us to meet each other and to get to know you better. After that, we'll take some time to make our final decisions. While we would like to accept everyone who is interested, we have limited space on our project teams. Decisions are sent out to everyone by mid-October.",
    },
    {
      question: "What will I learn as a designer?",
      answer:
        "As a designer, you’ll learn about the UI/UX Design process (wireframing, creating low to high fidelity mockups, branding, and more). You’ll also learn about incorporating user research when applicable and writing case studies after the entire design process is finished! As a designer, you’ll also get to learn about working in a cross-functional team. We’ll be primarily using Figma and other tools like Miro.",
    },
    {
      question: "What will I learn as a developer?",
      answer:
        "As a developer you'll learn about several of these front-end technologies — HTML, CSS, JavaScript/TypeScript, React framework, SASS — as well as back-end technologies — 3rd party APIs such as DocuSign, API design with NodeJS + Express and GoLang, SQL/NoSQL databases like MongoDB, and DevOps with Netlify and GitLab. You will also learn about version control (Git), doing code reviews for your fellow team members, and other industry best practices that will ensure you are able to write high-quality, sustainable code.",
    },
  ],
};

export default faq;
