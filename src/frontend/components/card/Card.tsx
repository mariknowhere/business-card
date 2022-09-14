import React, { FC } from "react";
import { ICardProps } from "./CardTypes";
import styles from './Card.module.scss';
import Text from "../text/Text";
import { TextVariantEnum } from "../text/TextTypes";
import Image from "../image/Image";
import classNames from "classnames";

const Card: FC<ICardProps> = ({
    title,
    description,
    info,
    icon,
    image,
    className,
    topic,
    classNameImage,
    classNameIcon,
    classNameHeader,
    classNameIconWrapper,
    classNameImageWrapper,
    classNameDescription,
    classNameTitle,
    }) => {
    return (
        <div className={classNames(className, styles['card'])}>
            {image && (
                <div className={classNames(classNameImageWrapper, styles['card-image-wrapper'])}>
                    <Image {...image} className={classNames(classNameImage, styles['card-image'])} />
                </div>
            )}
            <div>
                <div className={classNames(classNameHeader, styles['card-header'])}>
                    {icon && (
                        <div className={classNames(classNameIconWrapper, styles['card-icon-wrapper'])}>
                            <Image {...icon} className={classNames(classNameIcon, styles['card-icon'])} />
                        </div>
                    )}
                    <Text
                        children={title}
                        variant={TextVariantEnum.M}
                        className={classNames(classNameTitle, styles['card-title'])}
                    />
                    {topic && <Text children={topic} variant={TextVariantEnum.XS} className={styles['card-topic']} />}
                </div>
                <Text
                    children={description}
                    variant={TextVariantEnum.S}
                    className={classNames(classNameDescription, styles['card-description'])}
                />
                {info && (
                  <Text
                    children={info.title}
                    variant={TextVariantEnum.S}
                    className={styles['card-description']}
                  />
                )}
                {info && (
                  <Text
                    children={info.topic}
                    variant={TextVariantEnum.S}
                    className={styles['card-description']}
                  />
                )}
                {info && (
                  <div className={styles['card-info-responsibilities-wrapper']}>
                    {info.responsibilities.map(({text}) => (
                      <Text
                        children={text}
                        variant={TextVariantEnum.S}
                        className={styles['card-info-responsibilities']}
                      />
                    ))}
                </div>
                )}
                {info && (
                  <Text
                    children={info.bottom}
                    variant={TextVariantEnum.S}
                    className={styles['card-description']}
                  />
                )}
            </div>
        </div>
    );
};

export default Card;
