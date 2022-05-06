import React, { FC } from "react";
import {ButtonTypeEnum, IButtonProps} from "./ButtonTypes";
import classNames from "classnames";
import styles from './Button.module.scss';

const Button: FC<IButtonProps> = ({ onClick, className, label, type = ButtonTypeEnum.Primary }) => {
    return (
        <button className={classNames(className, styles['button'], styles[`button-${type}`])} onClick={onClick}>
            <span className={styles['button-content']}>
                <span className={styles['button-text']}>{label}</span>
            </span>
        </button>
    );
};

export default Button;
