import {type FC} from 'react';
//styles
import styles from '../styles/SaleSlider.module.scss';
//widgets
import {MainSectionLayout} from "@widgets/MainSectionLayout";

const SaleSlider: FC = () => {
    return (
        <MainSectionLayout
            title={'Успей купить!'}
            isCircle={false}
            isAccent={true}
            accentText={'Акции'}
        >
            <div className={styles.content}>
                111
            </div>
        </MainSectionLayout>
    );
};

export default SaleSlider;