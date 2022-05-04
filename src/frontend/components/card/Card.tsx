import React, {FC} from "react";
import {ICardProps} from "./CardTypes";
import styles from './Card.module.scss';
import Text from "../text/Text";
import {TextVariantEnum} from "../text/TextTypes";
import Image from "../image/Image";
import classNames from "classnames";

const Card: FC<ICardProps> = ({ title, description, icon, image, className, topic }) => {
    return (
        <div className={classNames(className, styles['card'])}>
            {image && <Image url={image}/>}
            <Text children={title} variant={TextVariantEnum.M} className={styles['card-title']} />
            {topic && <Text children={topic} variant={TextVariantEnum.XS} className={styles['card-topic']} />}
            <Text children={description} variant={TextVariantEnum.S} className={styles['card-description']} />
        </div>
    );
}

export default Card;
