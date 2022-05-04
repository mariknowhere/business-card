import React from 'react';

import styles from './Position.module.css'

const Position = () => {
    return (
        <>
            <div className={styles.block}>
                <div className={styles['block-1']}>block-1</div>
                <div className={styles['block-2']}>block-2</div>
                <div className={styles['block-3']}>block-3</div>
            </div>
        </>
    )
}

export default Position;
