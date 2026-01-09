import {type FC} from 'react';
//styles
import styles from '../styles/Questions.module.scss';
//widgets
import {MainSectionLayout} from "@widgets/MainSectionLayout";
//models
import {useGetQuestionsData} from "@widgets/Questions/models/useGetQuestionsData.ts";
import {dataQuestions} from "@widgets/Questions/models/data.ts";


const Questions: FC = () => {

    const {getDataQuestions} = useGetQuestionsData(dataQuestions)

    return (
        <MainSectionLayout
            title={'Почему выбирают нас?'}
            isAccent={true}
            isCircle={true}
            accentText={'FAQ'}
            circleClass={styles.section__circle_questions}
        >
            <div className={styles.content}>
                {
                    getDataQuestions.map(item => (
                        <div className={styles.content__item} key={item.id}>
                            <h2 className={styles.content__item_title}>
                                {item.title}
                            </h2>
                            <button className={styles.content__item_button}></button>
                        </div>
                    ))
                }
            </div>
        </MainSectionLayout>
    );
};

export default Questions;