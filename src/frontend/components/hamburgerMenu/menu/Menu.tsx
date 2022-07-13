import React, {FC} from 'react';
import styles from './Menu.module.scss';
import {IMenuProps} from "./MenuTypes";
import classNames from "classnames";
import Social from "../../social/Social";
import Title from "../../title/Title";
import {useResponsive} from "../../../hooks/useResponsive";
import {ScreenStates} from "../../../constants/ScreenStates";
import {TitleVariantEnum} from "../../title/TitleTypes";
import Image from "../../image/Image";

const Menu: FC<IMenuProps> = ({ socials, items, menuActive, setMenuActive, image }) => {
    const onMenuClickHandler = () => setMenuActive(!menuActive);
    const device = useResponsive();

    return (
        <div className={classNames(styles['menu'], { [styles['menu-active']]: menuActive })} onClick={onMenuClickHandler} >
            <div className={classNames(styles['menu-overlay'], { [styles['menu-overlay-open']]: menuActive})} />
            <div className={styles['menu-content']} onClick={event => event.stopPropagation()} >
                <Image {...image} className={styles['menu-close-icon']} onClick={onMenuClickHandler} />
                <ul className={styles['menu-items']}>
                    {items.map(({ href, content }) => (
                        <li className={styles['menu-item']} key={href+content} onClick={onMenuClickHandler}>
                            <a href={href} >
                                <Title
                                    children={content}
                                    variant={device === ScreenStates.Desktop ? TitleVariantEnum.H1 : TitleVariantEnum.H2}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={styles['menu-socials']}>
                    {socials.map(({href, image}) => (
                        <Social href={href} image={image} key={href} className={styles['menu-social']} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;