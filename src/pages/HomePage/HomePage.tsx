import {type FC} from 'react';
//widgets
import {Header} from "@widgets/Header";
import {WhyUs} from "@widgets/WhyUs";
import {SaleSlider} from "@widgets/SaleSlider";

const HomePage: FC = () => {
    return (
        <>
            <Header/>
            <WhyUs/>
            <SaleSlider/>
        </>
    );
};

export default HomePage;