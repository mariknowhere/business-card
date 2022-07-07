import React, {FC} from 'react';
import {IAsideProps} from "./AsideTypes";
import Social from "../../components/social/Social";
import Divider from "../../components/divider/Divider";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
import styles from './Aside.module.scss';
import {useResponsive} from "../../hooks/useResponsive";
import {ScreenStates} from "../../constants/ScreenStates";

const Aside: FC<IAsideProps> = ({ socials, title }) => {
    const screen = useResponsive();

    if (screen !== ScreenStates.Desktop) {
        return <></>;
    }

    return (
        <aside className={styles['aside']}>
            {socials.map(({href, image}) => (
                <Social href={href} image={image} key={href} className={styles['aside-social']} />
            ))}
            <Divider className={styles['aside-divider']} />
            <div className={styles['aside-title-wrapper']}>
                <Text children={title} variant={TextVariantEnum.L} className={styles['aside-title']} />
            </div>
        </aside>
    );
};

export default Aside;