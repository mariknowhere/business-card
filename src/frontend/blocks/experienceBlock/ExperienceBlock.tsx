import React, {FC} from "react";
import {IExperienceBlockProps} from "./ExperienceBlockTypes";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
import styles from './ExperienceBlock.module.scss';
import Title from "../../components/title/Title";
import {TitleVariantEnum} from "../../components/title/TitleTypes";
import Card from "../../components/card/Card";

const ExperienceBlock: FC<IExperienceBlockProps> = ({ title, topic, items }) => {
    return (
        <>
            <Text children={topic} variant={TextVariantEnum.M} className={styles['experience-block-topic']} />
            <Title children={title} variant={TitleVariantEnum.H1} className={styles['experience-block-title']}/>
                {items.map((item) => (
                    <ul>
                        <div>
                            {item.title}
                        </div>
                        <li>
                            {item.items.map((item) => (
                                <div>
                                    <Card {...item} />
                                </div>
                            ))}
                        </li>
                    </ul>
                ))}
        </>
    )
};

export default ExperienceBlock;
