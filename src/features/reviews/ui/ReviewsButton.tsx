import {type FC} from 'react';
//style
import styles from '../style/ReviewButton.module.scss'

const ReviewsButton: FC = () => {
    return (
        <button className={styles.button}>
            Оставить отзыв
        </button>
    );
};

export default ReviewsButton;