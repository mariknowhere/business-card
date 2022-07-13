import React, {FC, useState} from 'react';
import {ISelectProps} from "./SelectTypes";
import styles from './Select.module.scss';
import classNames from "classnames";
import Image from "../image/Image";

const Select: FC<ISelectProps> = ({ className, options, imageUp, imageDown }) => {
    const [isSelectOpen, setSelectOpen] = useState(false)

    const onSelectClickHandler = () => setSelectOpen(!isSelectOpen)

    return (
        <div onClick={onSelectClickHandler}>
            <select className={classNames(className, styles['select'])}>
                {options.map(({ content, value }) => (
                    <option key={content} value={value} className={styles['select-option']}>
                        {content}
                    </option>
                ))}
            </select>
            {isSelectOpen ? <Image {...imageDown} className={styles['select-image']} /> : <Image {...imageUp} className={styles['select-image']} />}
        </div>
    );
};

export default Select;
