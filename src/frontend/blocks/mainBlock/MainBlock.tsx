import React, { FC } from 'react';
import { IMainBlockProps } from "./MainBlockTypes";
import Title from "../../components/title/Title";
import { TitleVariantEnum } from "../../components/title/TitleTypes";
import styles from './MainBlock.module.scss';
import Text from "../../components/text/Text";
import { TextVariantEnum } from "../../components/text/TextTypes";
import Button from "../../components/button/Button";

const MainBlock: FC<IMainBlockProps> = ({ title, description, buttonText, blockId}) => {
    return (
        <div className={styles['main-block']} key={blockId}>
            <div className={styles['main-block-wrapper']}>
                <Text children={description} variant={TextVariantEnum.L} className={styles['main-block-description']} />
                <Title variant={TitleVariantEnum.H1} children={title} className={styles['main-block-title']}/>
                <Button label={buttonText} />
            </div>
        </div>
    );
};

export default MainBlock;
