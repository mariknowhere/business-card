import React, {FC} from "react";
import {IExperienceBlockProps} from "./ExperienceBlockTypes";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
import styles from './ExperienceBlock.module.scss';
import Card from "../../components/card/Card";
import Head from "../../components/head/Head";

const ExperienceBlock: FC<IExperienceBlockProps> = ({ title, topic, items, blockId }) => {
    return (
        <div className={styles['experience-block']} key={blockId}>
            <Head topicText={topic} titleText={title} classNameTopic={styles['experience-block-topic']}
                classNameTitle={styles['experience-block-title']} classNameDivider={styles['experience-block-divider']} />
            <div className={styles['experience-block-body']}>
                {items.map((item) => (
                    <ul>
                        <Text children={item.title} variant={TextVariantEnum.L}/>
                        {item.items.map((item) => (
                            <li className={styles['experience-block-item']}>
                                <Card {...item} key={item.title} />
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default ExperienceBlock;
