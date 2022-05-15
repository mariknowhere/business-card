import React, { FC } from "react";
import styles from './HamburgerMenu.module.scss';
import {IHamburgerMenuProps} from "./HamburgerMenuTypes";

const HamburgerMenu: FC<IHamburgerMenuProps> = ({ menuActive, setMenuActive }) => {
    return (
        <nav>
            <div onClick={() => setMenuActive(!menuActive)} className={styles['hamburger-menu-button']}>
                <span />
            </div>
        </nav>
    );
};

export default HamburgerMenu;
