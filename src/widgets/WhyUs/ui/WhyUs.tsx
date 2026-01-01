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
//models
import {DataWhyUs} from "@widgets/WhyUs/models/data.ts";
import {useGetWhyUsData} from "@widgets/WhyUs/models/useGetWhyUsData.ts";

const WhyUs: FC = () => {

    const {dataUseGetWhyUs} = useGetWhyUsData(DataWhyUs)

    return (
        <MainSectionLayout
            title={'Почему выбирают нас?'}
            isAccent={false}
            isCircle={true}
            circleClass={styles.section__circle_why}
        >
            <div className={styles.content}>
                <div className={styles.content__row}>
                    {
                        dataUseGetWhyUs.map(item => (
                            <div className={styles.content__item} key={item.id}>
                                <p className={styles.content__item_text}>
                                    {item.text}
                                </p>
                                {
                                    item.typeCircle
                                    &&
                                    <div className={styles.content__item_circle}>
                                        {
                                            item.typeCircle === 'small' ?
                                                <MainCircleLittle/>
                                                :
                                                <MainCircleBig/>
                                        }
                                    </div>
                                }
                            </div>
                        ))
                    }
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