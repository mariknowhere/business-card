import React, {FC} from "react";
import {IExperienceBlockProps} from "./ExperienceBlockTypes";
import styles from './ExperienceBlock.module.scss';
import Card from "../../components/card/Card";
import Head from "../../components/head/Head";
import Title from "../../components/title/Title";
import {TitleVariantEnum} from "../../components/title/TitleTypes";

const ExperienceBlock: FC<IExperienceBlockProps> = ({ title, topic, items, blockId }) => {
    return (
        <div className={styles['experience-block']} key={blockId}>
            <Head topicText={topic} titleText={title} classNameTopic={styles['experience-block-topic']}
                classNameTitle={styles['experience-block-title']} classNameDivider={styles['experience-block-divider']} />
            <div className={styles['experience-block-body']}>
                {items.map((item) => (
                    <ul key={item.title}>
                        <Title children={item.title} variant={TitleVariantEnum.H3} className={styles['experience-block-body-title']}/>
                        {item.items.map((item) => (
                            <li className={styles['experience-block-body-item-wrapper']} key={item.title}>
                                <Card
                                    {...item}
                                    className={styles['experience-block-body-item']}
                                    classNameHeader={styles['experience-block-body-item-header']}
                                />
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default ExperienceBlock;
