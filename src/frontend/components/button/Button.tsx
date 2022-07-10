import React, { FC } from "react";
import { ButtonTypeEnum, IButtonProps } from "./ButtonTypes";
import classNames from "classnames";
import styles from './Button.module.scss';

const Button: FC<IButtonProps> = ({
    onClick,
    className,
    label,
    type = ButtonTypeEnum.Primary,
    blockIdToScroll,
}) => {
    const handleButtonClick = () => {
        if (blockIdToScroll) {
            const block = document.querySelector(blockIdToScroll);

            block?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <button id="button" className={classNames(className, styles['button'], styles[`button-${type}`])} onClick={handleButtonClick}>
            <span className={styles['button-content']}>
                <span className={classNames(styles[`button-text`], styles[`button-text-${type}`])}>{label}</span>
            </span>
        </button>
    );
};

export default Button;
