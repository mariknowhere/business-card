import React, { FC } from 'react';
import { IMainBlockProps } from "./MainBlockTypes";
import Title from "../../components/title/Title";
import { TitleVariantEnum } from "../../components/title/TitleTypes";
import styles from './MainBlock.module.scss';
import Text from "../../components/text/Text";
import { TextVariantEnum } from "../../components/text/TextTypes";
import Button from "../../components/button/Button";
import { ButtonTypeEnum } from "../../components/button/ButtonTypes";
import {ScreenStates} from "../../constants/ScreenStates";
import {useResponsive} from "../../hooks/useResponsive";
import Select from "../../components/select/Select";

const MainBlock: FC<IMainBlockProps> = ({
    title,
    description,
    buttonText,
    blockId,
    blockIdToScroll,
    secondaryButtonText,
    secondaryBlockIdToScroll,
    select,
}) => {
    const device = useResponsive();

    return (
        <section className={styles['main-block']} id={blockId}>
            <Select className={styles['main-block-select']} {...select} />
            <div className={styles['main-block-wrapper']}>
                <Text children={description} variant={TextVariantEnum.L} className={styles['main-block-description']} />
                <Title variant={TitleVariantEnum.H1} children={title} className={styles['main-block-title']}/>
                <Button label={buttonText} blockIdToScroll={blockIdToScroll} className={styles['main-block-button']} />
                {device === ScreenStates.Desktop && (
                    <Button
                        label={secondaryButtonText}
                        blockIdToScroll={secondaryBlockIdToScroll}
                        type={ButtonTypeEnum.Secondary}
                    />
                )}
            </div>
        </section>
    );
};

export default MainBlock;
