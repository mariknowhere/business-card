import React, { FC } from "react";
import { IImageProps } from "./ImageTypes";
import styles from './Image.module.scss';
import classNames from "classnames";

const Image: FC<IImageProps> = ({ url, width, height, className }) => {
    return <img alt='' src={url} style={{ width: `${width}px`, height: `${height}px` }} className={classNames(styles['image'], className)} />;
}

export default Image;
