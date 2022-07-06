import React, { FC, useEffect, useState } from "react";
import Image from "../../components/image/Image";
import { IBannerProps } from "./BannerTypes";
import Menu from "../../components/hamburgerMenu/menu/Menu";
import HamburgerMenu from "../../components/hamburgerMenu/HamburgerMenu";
import styles from './Banner.module.scss';

const Banner: FC<IBannerProps> = ({ image, items, socials }) => {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [menuActive]);

    return (
        <>
            <Image className={styles['banner-image']} {...image} />
            <HamburgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} items={items} socials={socials} />
        </>
    );
};

export default Banner;
