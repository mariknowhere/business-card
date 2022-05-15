import React, { FC } from 'react';
import styles from './App.module.scss';
import MainBlock from "../blocks/mainBlock/MainBlock";
import AboutBlock from "../blocks/aboutBlock/AboutBlock";
import ExperienceBlock from "../blocks/experienceBlock/ExperienceBlock";
import SkillsBlock from "../blocks/skillsBlock/SkillsBlock";
import ContactsBlock from "../blocks/contactsBlock/ContactsBlock";
import Header from "../blocks/header/Header";

const App: FC = () => {
  const headerData = {
    blockId: 'header',
    image: {
      url: `images/header.jpg`,
    },
    items: [
      {
        href: '',
        content: 'About me',
      },
      {
        href: '',
        content: 'Experience'
      },
      {
        href: '',
        content: 'Skills'
      },
      {
        href: '',
        content: 'Portfolio'
      },
      {
        href: '',
        content: 'Contacts'
      },
    ],
    socials: [
      {
        href: 'https://t.me/maybebabythink',
        image: {
          url: 'images/social/telegram.png',
          height: 30,
        },
      },
      {
        href: 'https://www.linkedin.com/in/mariknowhere/',
        image: {
          url: 'images/social/linkedin.png',
          height: 30,
        },
      },
      {
        href: 'https://github.com/mariknowhere',
        image: {
          url: 'images/social/github.png',
          height: 30,
        },
      },
    ],
  };

  const mainBlock = {
    blockId: 2,
    title: 'I`m a Front-end Web Developer from Belarus',
    description: 'Hi, my name is Mark Strancheuski',
    buttonText: 'Portfolio',
  };

  const aboutBlock = {
    blockId: 3,
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
      url: 'images/me.jpg',
      height: 533,
    },
  };

  const experienceBlock = {
    blockId: 4,
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
        ],
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
        ],
      },
    ]
  };

  const skillsBlock = {
    blockId: 5,
    topic: 'Skills',
    title: 'What do I use at work',
    cards: [
      {
        image: {
          url: 'images/skills/javascript.png',
          height: 110,
        },
        title: 'JavaScript',
        description: `JavaScript is a scripting language that enables you to create dynamically updating content,
            control multimedia, animate images, and pretty much everything else.`,
      },
      {
        image: {
          url: 'images/skills/html.png',
          height: 110,
        },
        title: 'HTML/HTML5',
        description: 'HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages.',
      },
      {
        image: {
          url: 'images/skills/css.png',
          height: 110,
        },
        title: 'CSS/CSS3',
        description: `CSS3 makes changes to how some visual elements are implemented and rendered by a browser. However,
            it is not a single hugely unwieldy specification, unlike CSS2.`,
      },
      {
        image: {
          url: 'images/skills/react.svg',
          height: 110,
        },
        title: 'React',
        description: `React. js is an open-source JavaScript library that is used for building user interfaces
            specifically for single-page applications. It's used for handling the view layer for web and mobile apps.
            React also allows us to create reusable UI components.`,
      },
      {
        image: {
          url: 'images/skills/redux.png',
          height: 100,
        },
        title: 'Redux',
        description: `Redux is an open source JavaScript library for managing application state. Contains a number of 
          tools to greatly simplify the transfer of storage data through the context.`,
      },
      {
        image: {
          url: 'images/skills/jest.png',
          height: 100,
        },
        title: 'Jest',
        description: `Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with
         projects using: Babel, TypeScript, Node, React, Angular, Vue and more!`,
      },
      {
        image: {
          url: 'images/skills/sass.png',
          height: 100,
        },
        title: 'SASS/SCSS',
        description: `Sass is a CSS-based metalanguage designed to increase the abstraction level of CSS code. The Sass 
          language has two syntaxes: Sass is distinguished by the absence of curly braces, nested elements are 
          implemented in it using indentation. SCSS - uses curly braces, like CSS itself.`,
      },
      {
        image: {
          url: 'images/skills/less.png',
          height: 102,
        },
        title: 'Less',
        description: `Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. 
          It only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so 
          quickly.`,
      },
      {
        image: {
          url: 'images/skills/Git.png',
          height: 110,
        },
        title: 'Git',
        description: `Git is a free and open source distributed version control system designed to handle everything 
          from small to very large projects with speed and efficiency.`,
      },
      {
        image: {
          url: 'images/skills/typescript.png',
          height: 110,
        },
        title: 'TypeScript',
        description: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better 
        tooling at any scale.`,
      },
    ],
  };

  const contactsBlock = {
    blockId: 6,
    topic: 'Contacts',
    buttonText: 'Send a message',
    image: {
      url: 'images/me.jpg',
      height: 533,
    },
    title: 'Contact me',
    description: 'Any option for you could be:',
    subDescription: 'Or leave your details and I will write to you:',
    socials: [
      {
        href: 'https://t.me/maybebabythink',
        image: {
          url: 'images/social/telegram.png',
          height: 30,
        },
      },
      {
        href: 'https://www.linkedin.com/in/mariknowhere/',
        image: {
          url: 'images/social/linkedin.png',
          height: 30,
        },
      },
      {
        href: 'https://github.com/mariknowhere',
        image: {
          url: 'images/social/github.png',
          height: 30,
        },
      },
    ],
    form: {
      id: 'form',
      inputs: [
        {
          name: 'name',
          id: 'name',
          content: 'Name',
          type: 'text'
        },
        {
          name: 'email',
          id: 'email',
          content: 'Email',
          type: 'email',
        },
      ],
      text: {
        name: 'text',
        id: 'text',
        content: 'Message',
      },
    },
  };

  return (
    <div className={styles['page-wrapper']}>
      <div className={styles['page-content']}>
        <Header {...headerData} />
        <MainBlock {...mainBlock} />
        <AboutBlock {...aboutBlock} />
        <ExperienceBlock {...experienceBlock} />
        <SkillsBlock {...skillsBlock} />
        <ContactsBlock {...contactsBlock} />
      </div>
    </div>
  );
};

export default App;
