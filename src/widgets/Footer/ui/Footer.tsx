import {type FC} from 'react';
import {Link} from "react-router";
//styles
import styles from '../styles/Footer.module.scss'
//widgets
import {MainLayout} from "@widgets/MainLayout";
import FooterItem from "@widgets/Footer/ui/FooterItem.tsx";
import FooterInformation from "@widgets/Footer/ui/FooterInformation.tsx";
import FooterLinks from "@widgets/Footer/ui/FooterLinks.tsx";
//image
import iconLogo from '../assets/logo.png'

const Footer: FC = () => {

    const data = {
        title: 'Информация',
        routes: [
            {
                id: 1,
                path: "/",
                text: "Главная"
            },
            {
                id: 2,
                path: "/",
                text: "Главная"
            },
            {
                id: 3,
                path: "/",
                text: "Главная"
            },
            {
                id: 4,
                path: "/",
                text: "Главная"
            }
        ]
    }

    return (
        <footer className={styles.footer}>
            <MainLayout>
                <div className={styles.footer__content}>
                    <FooterItem
                        title={data.title}
                        routes={data.routes}
                    />
                    <FooterItem
                        title={data.title}
                        routes={data.routes}
                    />
                    <FooterInformation/>
                    <FooterLinks/>
                    <Link to={'/'} className={styles.footer__logo}>
                        <img src={iconLogo} alt="icon-logo"/>
                    </Link>
                </div>
            </MainLayout>
        </footer>
    );
};

export default Footer;