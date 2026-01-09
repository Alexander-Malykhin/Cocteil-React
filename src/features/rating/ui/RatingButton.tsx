import {type FC} from 'react';
//styles
import styles from '../styles/RatingButton.module.scss'
//image
import iconStar from '../assets/star.png'

const RatingButton: FC = () => {
    return (
        <div className={styles.rating}>
            <img
                src={iconStar}
                alt="star-icon"
                className={styles.rating__image}
            />
            <img
                src={iconStar}
                alt="star-icon"
                className={styles.rating__image}
            />
            <img
                src={iconStar}
                alt="star-icon"
                className={styles.rating__image}
            />
            <img
                src={iconStar}
                alt="star-icon"
                className={styles.rating__image}
            />
        </div>
    );
};

export default RatingButton;