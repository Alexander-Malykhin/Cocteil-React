import {type FC} from 'react';
//styles
import styles from '../styles/Cooperation.module.scss'
//widgets
import {MainSectionLayout} from "@widgets/MainSectionLayout";
import CooperationItem from "@widgets/Cooperation/ui/CooperationItem.tsx";
//models
import {dataCooperationResult} from "@widgets/Cooperation/models/data.ts";
import {useGetCooperationData} from "@widgets/Cooperation/models/useGetCooperationData.ts";

const Cooperation: FC = () => {

    const {cooperation, advantages} = useGetCooperationData(dataCooperationResult)

    return (
        <MainSectionLayout
            title="Сотрудничество с нами"
            isAccent={false}
            isCircle={false}
        >
            <div className={styles.content}>
                <p className={styles.content__text}>
                    Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах
                    и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки
                    зрения.
                </p>

                <div className={styles.content__list}>
                    {cooperation.map(item => (
                        <CooperationItem
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            type={'cooperation'}
                        />
                    ))}
                </div>

                <div className={styles.content__footer}>
                    <h2 className={styles.content__footer_title}>
                        Это выгодно. Какие преимущества?
                    </h2>

                    <div className={styles.content__list}>
                        {advantages.map(item => (
                            <CooperationItem
                                key={item.id}
                                text={item.text}
                                image={item.image}
                                type={'advantages'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MainSectionLayout>
    );
};


export default Cooperation;