import React, { FC } from 'react';
import styles from "./Social.module.scss";
import Image from "../image/Image";
import { ISocialProps } from "./SocialTypes";

const Social: FC<ISocialProps> = ({ href, image }) => {
    return (
        <a target='_blank' href={href} className={styles['social']} rel='noreferrer'>
            <Image {...image} />
        </a>
    );
};

export default Social;