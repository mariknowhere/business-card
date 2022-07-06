import React, { FC } from 'react';
import styles from './CommonPage.module.scss';
import MainBlock from "../blocks/mainBlock/MainBlock";
import AboutBlock from "../blocks/aboutBlock/AboutBlock";
import ExperienceBlock from "../blocks/experienceBlock/ExperienceBlock";
import SkillsBlock from "../blocks/skillsBlock/SkillsBlock";
import ContactsBlock from "../blocks/contactsBlock/ContactsBlock";
import Banner from "../blocks/banner/Banner";
import { store } from '../store';
import Aside from "../blocks/aside/Aside";

const CommonPage: FC = () => {
  const {
    asideData,
    bannerData,
    contactsBlockData,
    experienceBlockData,
    skillsBlockData,
    aboutBlockData,
    mainBlockData }
      = store;

  return (
    <div className={styles['page-content']}>
      <Aside {...asideData} />
      <Banner {...bannerData} />
      <MainBlock {...mainBlockData} />
      <AboutBlock {...aboutBlockData} />
      <ExperienceBlock {...experienceBlockData} />
      <SkillsBlock {...skillsBlockData} />
      <ContactsBlock {...contactsBlockData} />
    </div>
  );
};

export default CommonPage;
