import React, { FC } from 'react';
import styles from './CommonPage.module.scss';
import MainBlock from "../blocks/mainBlock/MainBlock";
import AboutBlock from "../blocks/aboutBlock/AboutBlock";
import ExperienceBlock from "../blocks/experienceBlock/ExperienceBlock";
import SkillsBlock from "../blocks/skillsBlock/SkillsBlock";
import ContactsBlock from "../blocks/contactsBlock/ContactsBlock";
import Header from "../blocks/header/Header";
import { store } from '../store';

const CommonPage: FC = () => {
  const {
    headerBlockData,
    contactsBlockData,
    experienceBlockData,
    skillsBlockData,
    aboutBlockData,
    mainBlockData }
      = store;

  return (
    <div className={styles['page-wrapper']}>
      <div className={styles['page-content']}>
        <Header {...headerBlockData} />
        <MainBlock {...mainBlockData} />
        <AboutBlock {...aboutBlockData} />
        <ExperienceBlock {...experienceBlockData} />
        <SkillsBlock {...skillsBlockData} />
        <ContactsBlock {...contactsBlockData} />
      </div>
    </div>
  );
};

export default CommonPage;
