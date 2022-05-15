import React, {FC} from 'react';
import styles from './Menu.module.scss';
import {IMenuProps} from "./MenuTypes";
import classNames from "classnames";
import Social from "../../social/Social";
import CloseIcon from '@mui/icons-material/Close';
import Title from "../../title/Title";
import {TitleVariantEnum} from "../../title/TitleTypes";

const Menu: FC<IMenuProps> = ({ socials, items, menuActive, setMenuActive }) => {
    return (
        <div className={classNames(styles['menu'], { [styles['menu-active']]: menuActive })} onClick={() => setMenuActive(!menuActive)} >
            <div className={styles['menu-overlay']} />
            <div className={styles['menu-content']} onClick={event => event.stopPropagation()} >
                <CloseIcon className={styles['menu-close-icon']} onClick={() => setMenuActive(!menuActive)} />
                <ul className={styles['menu-items']}>
                    {items.map(({ href, content }) => (
                        <li className={styles['menu-item']}>
                            <a href={href} ><Title children={content} variant={TitleVariantEnum.H1} /></a>
                        </li>
                    ))}
                </ul>
                <div className={styles['menu-socials']}>
                    {socials.map((social) => (
                        <Social {...social} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;