import {type FC} from 'react';
//components
import {Header} from "@widgets/Header";
import {WhyUs} from "@widgets/WhyUs";

const HomePage: FC = () => {
    return (
        <>
            <Header/>
            <WhyUs/>
        </>
    );
};

export default HomePage;