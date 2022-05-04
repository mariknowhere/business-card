import React, {FC} from "react";
import { IAboutBlockProps } from "./AboutBlockTypes";
import Image from "../../components/image/Image";
import Text from "../../components/text/Text";
import { TextVariantEnum } from "../../components/text/TextTypes";
import styles from './AboutBlock.module.scss';
import Title from "../../components/title/Title";
import { TitleVariantEnum } from "../../components/title/TitleTypes";
import Card from "../../components/card/Card";

const AboutBlock: FC<IAboutBlockProps> = ({ title, description, image, topic, cards }) => {
    return (
        <div className={styles['about-block']}>
            <Image url={image.url} width={image.width} height={image.height} className={styles['about-block-image']} />
            <div className={styles['about-block-content']}>
                <Text children={topic} variant={TextVariantEnum.M} className={styles['about-block-topic']} />
                <Title children={title} variant={TitleVariantEnum.H1} className={styles['about-block-title']}/>
                <Text children={description} variant={TextVariantEnum.M} className={styles['about-block-description']}/>
                <div className={styles['about-block-cards']}>
                    {cards.map((card) => (
                        <Card {...card} key={card.title} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AboutBlock;
