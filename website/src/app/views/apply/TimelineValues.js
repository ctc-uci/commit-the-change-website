import React from 'react';

const timelineValues = [
  {
    leftText: 'Week 0',
    header: 'Meet the Club!',
    date: 'Sep. 19 - 23',
    description:
      'Swing by our booth at the Anteater Involvement Fair from 11am - 4pm on September 19th or attend one of our socials to meet the members of Commit the Change! More information regarding these events will be released closer to the date, so keep an eye on our social media.',
  },
  {
    leftText: 'Week 1',
    header: 'Applications Due',
    date: 'Sep. 30',
    description: (
      <p>
        Our application consists of a few short response questions so we can
        learn more about your experience, your goals, and your background. If
        you don&apos;t have experience, that&apos;s fine too! Your responses will help us
        gauge your interest and fit for the club in the coming weeks of
        recruitment.
        Applications open
        {' '}
        <b>September 19th</b>
        {' '}
        and will close
        {' '}
        <b>October 1st</b>
        .
      </p>
    ),
  },
  {
    leftText: 'Week 2',
    header: 'Coffee Chats',
    date: 'Oct. 3 - 7',
    description:
      'Coffee chats are one-on-ones with a board member or project lead by invitation. But no pressure - this is a casual way for us to get to know you better and for you to learn more about Commit the Change!',
  },
  {
    leftText: 'Week 3',
    header: 'Decision',
    date: 'Mid-October',
    description: (
      <p>
        Check your email on
        {' '}
        <b>Decision Day</b>
        {' '}
        to see your application status.
        Regardless of the outcome, we truly appreciate you taking the time to
        see what Commit the Change has to offer! Thanks for sticking with us
        these past few weeks!
      </p>
    ),
  },
];

export default timelineValues;
