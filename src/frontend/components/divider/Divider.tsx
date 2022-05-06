import React, { FC } from "react";
import classNames from "classnames";
import {IDividerProps} from "./DividerTypes";
import styles from './Divider.module.scss';

const Divider: FC<IDividerProps> = ({ className }) => {
    return <div className={classNames(className, styles['divider'] )} />
};

export default Divider;
