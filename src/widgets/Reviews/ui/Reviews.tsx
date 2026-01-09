import {type FC} from 'react';
//style
import styles from '../style/Reviews.module.scss'
//widgets
import {MainSectionLayout} from "@widgets/MainSectionLayout";
import ReviewsItem from "@widgets/Reviews/ui/ReviewsItem.tsx";
//features
import ReviewsButton from "@features/reviews/ui/ReviewsButton.tsx";
import ReviewButtonSlider from "@features/reviews/ui/ReviewButtonSlider.tsx";

const Reviews: FC = () => {
    return (
        <MainSectionLayout
            title={'Отзывы наших покупателей'}
            isCircle={false}
            isAccent={false}
        >
            <div className={styles.content}>
                <div className={styles.content__reviews}>
                    <div className={styles.content__list}>
                        <ReviewsItem/>
                        <ReviewsItem/>
                    </div>
                   <ReviewButtonSlider/>
                </div>
               <ReviewsButton/>
            </div>
        </MainSectionLayout>
    );
};

export default Reviews;