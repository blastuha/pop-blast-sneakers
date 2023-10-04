import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cutlist.module.scss';

function Cutlist({ headerMenu }) {
    return (
        <div className={styles.cutlist}>
            <div className={styles['cutlist-content']}>
                {headerMenu
                    .filter((_, i) => i >= 2)
                    .map((item, i) => {
                        return (
                            <div key={i} className={styles['cutlist-item']}>
                                <Link to={item.link}>{item.name}</Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Cutlist;
