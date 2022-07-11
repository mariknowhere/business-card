import React, { FC } from "react";
import { IAboutBlockProps } from "./AboutBlockTypes";
import Image from "../../components/image/Image";
import Text from "../../components/text/Text";
import { TextVariantEnum } from "../../components/text/TextTypes";
import styles from './AboutBlock.module.scss';
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";

const AboutBlock: FC<IAboutBlockProps> = ({ title, description, image, topic, cards, blockId }) => {
    return (
        <section className={styles['about-block']} id={blockId}>
            <div className={styles['about-block-image-wrapper']}>
                <Image url={image.url} width={image.width} height={image.height} className={styles['about-block-image']} />
            </div>
            <div className={styles['about-block-content']}>
                <Header topicText={topic} titleText={title} classNameTopic={styles['about-block-topic']}
                        classNameTitle={styles['about-block-title']} classNameDivider={styles['about-block-divider']} />
                <Text children={description} variant={TextVariantEnum.M} className={styles['about-block-description']}/>
                <div className={styles['about-block-cards-wrapper']}>
                    {cards.map((card) => (
                        <Card
                            {...card}
                            key={card.title}
                            className={styles['about-block-card']}
                            classNameImageWrapper={styles['about-block-card-header']}
                            classNameImage={styles['about-block-card-header-image']}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutBlock;
