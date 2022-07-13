import React, { FC } from "react";
import { IImageProps } from "./ImageTypes";
import styles from './Image.module.scss';
import classNames from "classnames";

const Image: FC<IImageProps> = ({ url, alt, width, height, className, onClick }) => {
    return <img
        alt={alt}
        src={url}
        style={{ width: `${width}px`, height: `${height}px` }}
        className={classNames(styles['image'], className)}
        onClick={onClick}
    />;
};

export default Image;
