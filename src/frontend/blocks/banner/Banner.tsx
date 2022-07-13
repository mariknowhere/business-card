import React, { FC, useEffect, useState } from "react";
import { IBannerProps } from "./BannerTypes";
import Menu from "../../components/hamburgerMenu/menu/Menu";
import HamburgerMenu from "../../components/hamburgerMenu/HamburgerMenu";
import styles from './Banner.module.scss';

const hidden = 'hidden';
const visible = 'visible';

const Banner: FC<IBannerProps> = ({ items, socials, image, hamburgerMenuImage }) => {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = hidden;
        } else {
            document.body.style.overflow = visible;
        }
    }, [menuActive]);

    return (
        <header className={styles.banner}>
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} items={items} socials={socials} image={image} />
            <div className={styles['banner-image']} />
            <HamburgerMenu menuActive={menuActive} setMenuActive={setMenuActive} image={hamburgerMenuImage} />
        </header>
    );
};

export default Banner;
