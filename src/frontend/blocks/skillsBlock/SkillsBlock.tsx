import React, { FC } from "react";
import {ISkillsBlockProps} from "./SkillsBlockTypes";
import Head from "../../components/head/Head";
import Card from "../../components/card/Card";
import styles from './SkillsBlock.module.scss';

const SkillsBlock: FC<ISkillsBlockProps> = ({ topic, title, cards, blockId }) => {
    return (
        <div className={styles['skills-block']} key={blockId}>
            <Head topicText={topic} titleText={title} classNameDivider={styles['skills-block-divider']} classNameTopic={styles['skills-block-topic']} />
            <div className={styles['skills-block-cards-wrapper']}>
                {cards.map((card) => (
                    <Card {...card} key={card.title} className={styles['skills-block-card']}
                          classNameImage={styles['skills-block-card-image']} />
                ))}
            </div>
        </div>
    );
};

export default SkillsBlock;
