import {type FC} from 'react';
//styles
import styles from '../style/ReviewsItem.module.scss'
//image
import userImage from "@widgets/Reviews/assets/user.png";
//features
import RatingButton from "@features/rating/ui/RatingButton.tsx";

const ReviewsItem: FC = () => {
    return (
        <article className={styles.item}>
            <img
                src={userImage}
                alt="user-icon"
                className={styles.item__image}
            />

            <div className={styles.item__information}>
                <RatingButton/>
                <p className={styles.item__text}>
                    Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.
                </p>
                <div className={styles.item__footer}>
                    <h3 className={styles.item__name}>
                        Анна Котлова
                    </h3>

                    <span className={styles.item__time}>
                        23.05.2021
                    </span>
                </div>
            </div>
        </article>
    );
};

export default ReviewsItem;