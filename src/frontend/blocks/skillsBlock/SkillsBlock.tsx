import React, { FC } from "react";
import { ISkillsBlockProps } from "./SkillsBlockTypes";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import styles from './SkillsBlock.module.scss';

const SkillsBlock: FC<ISkillsBlockProps> = ({ topic, title, cards, blockId }) => {
    return (
        <div className={styles['skills-block']} key={blockId}>
            <Header
                topicText={topic}
                titleText={title}
                classNameDivider={styles['skills-block-divider']}
                classNameTopic={styles['skills-block-topic']}
            />
            <div className={styles['skills-block-cards-wrapper']}>
                {cards.map((card) => (
                    <Card
                        {...card}
                        key={card.title}
                        className={styles['skills-block-card']}
                        classNameImage={styles['skills-block-card-image']}
                        classNameDescription={styles['skills-block-card-description']}
                        classNameTitle={styles['skills-block-card-title']}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsBlock;
