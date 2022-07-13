import React, { FC } from "react";
import styles from './HamburgerMenu.module.scss';
import { IHamburgerMenuProps } from "./HamburgerMenuTypes";
import Image from "../image/Image";
import {useResponsive} from "../../hooks/useResponsive";
import {ScreenStates} from "../../constants/ScreenStates";

const HamburgerMenu: FC<IHamburgerMenuProps> = ({ menuActive, setMenuActive, image }) => {
    const onClickHandler = () => setMenuActive(!menuActive);
    const device = useResponsive();
    console.log(device)
    return (
        <nav className={styles['hamburger-menu']}>
            <div onClick={onClickHandler} className={styles['hamburger-menu-button']}>
                <span />
                <span className={styles['hamburger-menu-long']} />
                <span />
            </div>
            {device !== ScreenStates.Mobile && <Image {...image} className={styles['hamburger-menu-image']}/>}
        </nav>
    );
};

export default HamburgerMenu;
