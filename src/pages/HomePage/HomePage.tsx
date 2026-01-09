import {type FC} from 'react';
//widgets
import {Header} from "@widgets/Header";
import {WhyUs} from "@widgets/WhyUs";
import {SaleSlider} from "@widgets/SaleSlider";
import {Questions} from "@widgets/Questions";
import {Cooperation} from "@widgets/Cooperation";
import {Reviews} from "@widgets/Reviews";
import {Footer} from "@widgets/Footer";

const HomePage: FC = () => {
    return (
        <>
            <Header/>
            <WhyUs/>
            <SaleSlider/>
            <Reviews/>
            <Questions/>
            <Cooperation/>
            <Footer/>
        </>
    );
};

export default HomePage;