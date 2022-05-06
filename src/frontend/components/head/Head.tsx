import React, {FC} from "react";
import { IHeadProps } from "./HeadTypes";
import Text from "../text/Text";
import { TextVariantEnum } from "../text/TextTypes";
import Title from "../title/Title";
import { TitleVariantEnum } from "../title/TitleTypes";
import styles from './Head.module.scss';
import classNames from "classnames";
import Divider from "../divider/Divider";

const Head: FC<IHeadProps> = ({ topicText, titleText, classNameTopic, classNameTitle, classNameDivider }) => {
    return (
        <>
            <Text children={topicText} variant={TextVariantEnum.M} className={classNames(classNameTopic, styles['head-topic'])} />
            <Title children={titleText} variant={TitleVariantEnum.H1} className={classNames(classNameTitle, styles['head-title'])} />
            <Divider className={classNames(classNameDivider)} />
        </>
    );
};

export default Head;
