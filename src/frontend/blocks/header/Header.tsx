import React, {FC, useEffect, useState} from "react";
import Image from "../../components/image/Image";
import {IHeaderProps} from "./HeaderTypes";
import Menu from "../../components/hamburgerMenu/menu/Menu";
import HamburgerMenu from "../../components/hamburgerMenu/HamburgerMenu";
import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({ image, items, socials }) => {
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
            <Image className={styles['header-image']} {...image} />
            <HamburgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} items={items} socials={socials} />
        </>
    );
};

export default Header;
