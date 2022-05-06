import React, { FC } from 'react';
import styles from './App.module.scss';
import MainBlock from "../blocks/mainBlock/MainBlock";
import AboutBlock from "../blocks/aboutBlock/AboutBlock";
import ExperienceBlock from "../blocks/experienceBlock/ExperienceBlock";

const App: FC = () => {
  const mainBlock = {
    title: 'I`m a Front-end Web Developer from Belarus',
    description: 'Hi! My name is Mark Strancheuski',
    buttonText: 'Portfolio'
  }

  const aboutBlock = {
    topic: 'About me',
    title: 'My name is Mark',
    description: `I was born in Belarus, Polotsk. I went to study as a “software engineer” in Minsk, at the BNTU.
        In 2021, I got a job at Itransition as a Front-end Web Developer (React). I work remotely and live in
        Novopolotsk, sometimes I visit Minsk. Now I am in search of a new project (company).`,
    cards: [
      {
        title: 'Web-development',
        description: `Web development is the building and maintenance of websites; it’s the work that happens behind 
          the scenes to make a website look great, work fast and perform well with a seamless user experience.`,
      },
      {
        title: 'Application Development',
        description: `Application development is the process of designing, building, and implementing software 
          applications.`,
      },
      {
        title: 'UI/UX Design',
        description: `UX (User Experience) is responsible for how the interface works. UI (User Interface) for how the
         interface looks.`,
      },
    ],
    image: {
      url: 'https://lastfm.freetls.fastly.net/i/u/770x0/e5974b07c6ae275265f46a0ccdd9b55c.jpg',
      width: 400,
      height: 533,
    },
  };

  const experienceBlock = {
    topic: 'Experience',
    title: 'How can I be useful',
    items: [
      {
        title: 'Education',
        items: [
          {
            title: 'Belarusian National Technical University',
            topic: 'Minsk | (2020 - 2024)',
            description: `In 2020, I entered «the Faculty of Information Technology and Robotics» with a degree in 
            «Information Systems and Technology Software»`,
          },
          {
            title: 'Course at Itransiton',
            topic: 'Minsk | (2021)',
            description: '',
          },
        ]
      },
      {
        title: 'Working experience',
        items: [
          {
            title: 'Itransition Group',
            topic: 'Remote work | (2021 - now)',
            description: `I have been working as a Front-end Web Developer for a year now. Had experience in banking 
            project.`,
          },
        ]
      },
    ]
  }

  return (
    <div className={styles['page-wrapper']}>
      <div className={styles['page-content']}>
        <MainBlock {...mainBlock} />
        <AboutBlock {...aboutBlock} />
        <ExperienceBlock {...experienceBlock} />
      </div>
    </div>
  );
};

export default App;
