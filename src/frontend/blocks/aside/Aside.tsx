import React, { FC } from 'react';
import { IAsideProps } from "./AsideTypes";
import Social from "../../components/social/Social";
import Divider from "../../components/divider/Divider";
import Text from "../../components/text/Text";
import { TextVariantEnum } from "../../components/text/TextTypes";
import styles from './Aside.module.scss';

const Aside: FC<IAsideProps> = ({ socials, title }) => {
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