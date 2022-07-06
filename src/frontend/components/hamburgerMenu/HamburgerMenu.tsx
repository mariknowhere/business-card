import React, { FC } from "react";
import styles from './HamburgerMenu.module.scss';
import { IHamburgerMenuProps } from "./HamburgerMenuTypes";

const HamburgerMenu: FC<IHamburgerMenuProps> = ({ menuActive, setMenuActive }) => {
    const onClickHandler = () => setMenuActive(!menuActive);

    return (
        <nav>
            <div onClick={onClickHandler} className={styles['hamburger-menu-button']}>
                <span />
            </div>
        </nav>
    );
};

export default HamburgerMenu;
