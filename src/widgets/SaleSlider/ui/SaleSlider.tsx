import {type FC} from 'react';
//styles
import styles from '../styles/SaleSlider.module.scss';
//widgets
import {MainSectionLayout} from "@widgets/MainSectionLayout";
import ButtonSlider from "@widgets/SaleSlider/ui/ButtonSlider.tsx";
//entities
import ProductCard from "@/entities/product/ui/ProductCard.tsx";

const SaleSlider: FC = () => {

    return (
        <MainSectionLayout
            title={'Успей купить!'}
            isCircle={false}
            isAccent={true}
            accentText={'Акции'}
        >
            <div className={styles.content}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ButtonSlider/>
            </div>
        </MainSectionLayout>
    );
};

export default SaleSlider;