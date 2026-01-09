import {type FC} from 'react';
//styles
import styles from '../styles/ButtonSlider.module.scss'
//image
import iconCatalogVioletArrow from '../assets/arrow-violet.svg'

const ButtonSlider: FC = () => {
    return (
        <div className={styles.button}>
            <img
                src={iconCatalogVioletArrow}
                alt="arrow-icon"
                className={styles.button__image}
            />
        </div>
    );
};

export default ButtonSlider;