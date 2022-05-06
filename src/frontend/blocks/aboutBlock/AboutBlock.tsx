import React, {FC} from "react";
import { IAboutBlockProps } from "./AboutBlockTypes";
import Image from "../../components/image/Image";
import Text from "../../components/text/Text";
import { TextVariantEnum } from "../../components/text/TextTypes";
import styles from './AboutBlock.module.scss';
import Card from "../../components/card/Card";
import Head from "../../components/head/Head";

const AboutBlock: FC<IAboutBlockProps> = ({ title, description, image, topic, cards }) => {
    return (
        <div className={styles['about-block']} id='about'>
            <Image url={image.url} width={image.width} height={image.height} className={styles['about-block-image']} />
            <div className={styles['about-block-content']}>
                <Head topicText={topic} titleText={title} classNameTopic={styles['about-block-topic']}
                      classNameTitle={styles['about-block-title']} classNameDivider={styles['about-block-divider']} />
                <Text children={description} variant={TextVariantEnum.M} className={styles['about-block-description']}/>
                <div className={styles['about-block-cards-wrapper']}>
                    {cards.map((card) => (
                        <Card {...card} key={card.title} className={styles['about-block-card']} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutBlock;
