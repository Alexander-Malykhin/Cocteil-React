import {type FC} from 'react';
//styles
import styles from '../styles/CatalogButton.module.scss'
//image
import iconCatalogVioletArrow from '../assets/arrow-violet.svg'

const CatalogButton: FC = () => {
    return (
        <button className={styles.button}>
            <span className={styles.button__name}>Каталог</span>
            <img
                src={iconCatalogVioletArrow}
                alt="arrow-violet"
                className={styles.button__arrow}
            />
        </button>
    );
};

export default CatalogButton;