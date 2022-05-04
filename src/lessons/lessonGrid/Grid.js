import React from 'react';
import styles from './Grid.module.scss';
import classNames from "classnames";

const Grid = () => (
    <div className={styles.grid}>
        <div className={styles['grid-body']}>
            <div className={styles['grid-item']}>1</div>
            <div className={styles['grid-item']}>2</div>
            <div className={styles['grid-item']}>3</div>
            <div className={styles['grid-item']}>4</div>
            <div className={styles['grid-item']}>5</div>
            <div className={styles['grid-item']}>6</div>
        </div>
        <h2 className={styles['grid-title']}>Имена областей</h2>
        <div className={styles['grid-wrapper']}>
            <header className={classNames(styles['grid-header'], styles['grid-item'])}>Header</header>
            <aside className={classNames(styles['grid-side-bar'], styles['grid-item'])}>SideBar</aside>
            <div className={classNames(styles['grid-content'], styles['grid-item'])}>Content</div>
        </div>
    </div>
);

export default Grid;
