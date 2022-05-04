import React, { FC } from 'react';
import {ITitleProps, TitleVariantEnum} from "./TitleTypes";
import classNames from "classnames";
import styles from './Title.module.scss';

const Title: FC<ITitleProps> = ({ variant = TitleVariantEnum.H2, className, children }) => {
    return (
        <div className={classNames(className, styles['title'], styles[`title-${variant}`])}>
            {children}
        </div>
    )
}

export default Title;
