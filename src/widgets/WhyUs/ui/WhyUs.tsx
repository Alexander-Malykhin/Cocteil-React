import {type FC} from 'react';
//styles
import styles from '../styles/WhyUs.module.scss';
//widgets
import {MainSectionLayout} from "@widgets/MainSectionLayout";
//features
import ChatButton from "@features/chat/ui/ChatButton.tsx";
import UpButton from "@features/up/ui/UpButton.tsx";
//shared
import MainCircleLittle from "@shared/ui/MainCircleLittle/MainCircleLittle.tsx";
import MainCircleBig from "@shared/ui/MainCircleBig/MainCircleBig.tsx";

const WhyUs: FC = () => {
    return (
        <MainSectionLayout
            title={'Почему выбирают нас?'}
            isAccent={false}
        >
            <div className={styles.content}>
                <div className={styles.content__row}>
                    <div className={styles.content__item}>
                        <p className={styles.content__item_text}>
                            Скидки постоянным клиентам от 5%
                        </p>
                        <div className={styles.content__item_circle}>
                            <MainCircleLittle/>
                        </div>
                    </div>
                    <div className={styles.content__item}>
                        <p className={styles.content__item_text}>
                            Предлагаем самые выгодные цены
                        </p>
                    </div>
                    <div className={styles.content__item}>
                        <p className={styles.content__item_text}>
                            Наши покупатели всегда остаются довольны
                        </p>
                        <div className={styles.content__item_circle}>
                            <MainCircleBig/>
                        </div>
                    </div>
                    <div className={styles.content__item}>
                        <p className={styles.content__item_text}>
                            Широкий ассортимент товаров для всей семьи
                        </p>
                    </div>
                    <div className={styles.content__item}>
                        <p className={styles.content__item_text}>
                            Возможность доставки в любой город Беларуси
                        </p>
                        <div className={styles.content__item_circle}>
                            <MainCircleBig/>
                        </div>
                    </div>
                    <div className={styles.content__item}>
                        <p className={styles.content__item_text}>
                            Пункты выдачи заказов рядом с домом
                        </p>
                        <div className={styles.content__item_circle}>
                            <MainCircleLittle/>
                        </div>
                    </div>
                </div>
                <div className={styles.content__row}>
                    <UpButton/>
                    <ChatButton/>
                </div>
            </div>
        </MainSectionLayout>
    );
};

export default WhyUs;