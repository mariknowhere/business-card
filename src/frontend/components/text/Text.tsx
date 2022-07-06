import React, { FC } from 'react';
import { ITextProps, TextVariantEnum } from "./TextTypes";
import classNames from "classnames";
import styles from './Text.module.scss';

const Text: FC<ITextProps> = ({ className, variant = TextVariantEnum.M, children  }) => {
    return (
        <div className={classNames(className, styles['text'], styles[`text-${variant}`])}>
            {children}
        </div>
    );
};

export default Text;
