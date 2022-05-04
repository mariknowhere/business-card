import React, { FC } from 'react';
import styles from './App.module.scss';
import MainBlock from "../blocks/mainBlock/MainBlock";

const App: FC = () => {
  const mainBlock = {
    title: 'I`m a Front-end Web Developer from Belarus',
    description: 'Hi! My name is Mark Strancheuski',
    buttonText: 'Portfolio'
  }

  return (
    <div className={styles['page-wrapper']}>
      <div className={styles['page-content']}>
        <MainBlock title={mainBlock.title} description={mainBlock.description} buttonText={mainBlock.buttonText} />
      </div>
    </div>
  );
}

export default App;
