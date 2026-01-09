import {type FC} from 'react';
//styles
import styles from '../styles/CatalogButtonMore.module.scss'
//image
import iconCatalogVioletArrow from '../assets/arrow-violet.svg'

const CatalogButtonMore: FC = () => {
    return (
        <button className={styles.button}>
            <span className={styles.button__name}>Подробнее</span>
            <img
                src={iconCatalogVioletArrow}
                alt="icon-arrow"
                className={styles.button__arrow}
            />
        </button>
    );
};

export default CatalogButtonMore;