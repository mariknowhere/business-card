import React, { FC, useEffect, useState } from "react";
import { IBannerProps } from "./BannerTypes";
import Menu from "../../components/hamburgerMenu/menu/Menu";
import HamburgerMenu from "../../components/hamburgerMenu/HamburgerMenu";
import styles from './Banner.module.scss';

const hidden = 'hidden';
const visible = 'visible';

const Banner: FC<IBannerProps> = ({ items, socials }) => {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = hidden;
        } else {
            document.body.style.overflow = visible;
        }
    }, [menuActive]);

    return (
        <header>
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} items={items} socials={socials} />
            <div className={styles.banner} />
            <HamburgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
        </header>
    );
};

export default Banner;
