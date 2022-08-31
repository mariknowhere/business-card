import React, { FC } from 'react';
import styles from "./Social.module.scss";
import Image from "../image/Image";
import { ISocialProps } from "./SocialTypes";
import classNames from "classnames";

const Social: FC<ISocialProps> = ({ href, image, className, classNameImage }) => {
    return (
        <a target='_blank' href={href} className={classNames(className, styles['social'])} rel='noreferrer'>
            <Image {...image} className={classNameImage} />
        </a>
    );
};

export default Social;
