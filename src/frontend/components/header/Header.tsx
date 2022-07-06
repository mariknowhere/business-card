import React, { FC } from "react";
import { IHeaderProps } from "./HeaderTypes";
import Text from "../text/Text";
import { TextVariantEnum } from "../text/TextTypes";
import Title from "../title/Title";
import { TitleVariantEnum } from "../title/TitleTypes";
import styles from './Header.module.scss';
import classNames from "classnames";
import Divider from "../divider/Divider";

const Header: FC<IHeaderProps> = ({ topicText, titleText, classNameTopic, classNameTitle, classNameDivider }) => {
    return (
        <>
            <Text
                children={topicText} variant={TextVariantEnum.M}
                className={classNames(classNameTopic, styles['header-topic'])}
            />
            <Title
                children={titleText}
                variant={TitleVariantEnum.H1}
                className={classNames(classNameTitle, styles['header-title'])}
            />
            <Divider className={classNames(classNameDivider)} />
        </>
    );
};

export default Header;
