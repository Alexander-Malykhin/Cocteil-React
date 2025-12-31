import {type FC} from 'react';
//styles
import styles from '../styles/HeaderBurgerButton.module.scss'

const HeaderBurgerButton: FC = () => {
    return (
        <button className={styles.burger}>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
        </button>
    );
};

export default HeaderBurgerButton;