import React, {FC} from 'react';
import {IPortfolioBlockProps} from "./PortfolioBlockTypes";
import Header from "../../components/header/Header";
import styles from './PortfolioBlock.module.scss';
import Social from "../../components/social/Social";

const PortfolioBlock: FC<IPortfolioBlockProps> = ({ title, topic, blockId, works }) => {
  return (
    <div id={blockId} className={styles['portfolio-block']}>
      <Header
        topicText={topic}
        titleText={title}
        classNameDivider={styles['portfolio-block-divider']}
        classNameTopic={styles['portfolio-block-topic']}
      />
      <div className={styles['portfolio-block-works']}>
        {works.map((work) => (
          <Social {...work}
                  key={work.href}
                  className={styles['portfolio-block-work']}
                  classNameImage={styles['portfolio-block-work-image']}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioBlock;
