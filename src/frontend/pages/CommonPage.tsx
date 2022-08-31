import React, { FC } from 'react';
import styles from './CommonPage.module.scss';
import MainBlock from "../blocks/mainBlock/MainBlock";
import AboutBlock from "../blocks/aboutBlock/AboutBlock";
import ExperienceBlock from "../blocks/experienceBlock/ExperienceBlock";
import SkillsBlock from "../blocks/skillsBlock/SkillsBlock";
import ContactsBlock from "../blocks/contactsBlock/ContactsBlock";
import Banner from "../blocks/banner/Banner";
import { storeEng, storeRu } from '../store';
import Aside from "../blocks/aside/Aside";
import {useLanguage} from "../hooks/useLanguage";
import { eng } from "../constants/language";
import PortfolioBlock from "../blocks/portfolioBlock/PortfolioBlock";

const CommonPage: FC = () => {
    const language = useLanguage()

    const store = language === eng ? storeEng : storeRu;

    const {
    asideData,
    bannerData,
    contactsBlockData,
    experienceBlockData,
    skillsBlockData,
    aboutBlockData,
    mainBlockData,
    portfolioBlockData,
    }
      = store;

  return (
    <div className={styles['page-content']}>
      <Aside {...asideData} />
      <Banner {...bannerData} />
      <MainBlock {...mainBlockData} />
        <div className={styles['blocks-wrapper']}>
          <AboutBlock {...aboutBlockData} />
          <ExperienceBlock {...experienceBlockData} />
          <SkillsBlock {...skillsBlockData} />
          <PortfolioBlock {...portfolioBlockData} />
          <ContactsBlock {...contactsBlockData} />
        </div>
    </div>
  );
};

export default CommonPage;
