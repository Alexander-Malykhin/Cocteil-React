import {type FC} from 'react';
//styles
import styles from '../styles/Header.module.scss';
//components
import {MainLayout} from "@widgets/MainLayout";
//images
import iconFirstBanner from '../assets/banner/first-banner.png';
import iconLastBanner from '../assets/banner/last-banner.png';
//ui
import HeaderBurgerButton from "@widgets/Header/ui/HeaderBurgerButton.tsx";
import HeaderSearch from "@widgets/Header/ui/HeaderSearch.tsx";
import HeaderActions from "@widgets/Header/ui/HeaderActions.tsx";
//features
import CatalogButton from "@features/catalog/ui/CatalogButton.tsx";


const Header: FC = () => {
    return (
        <header className={styles.header}>
            <MainLayout>
                <div className={styles.header__content}>
                    <div className={styles.header__top}>
                        <HeaderBurgerButton/>

                        <div className={styles.header__panel}>
                            <HeaderSearch/>
                            <HeaderActions/>
                        </div>
                    </div>
                    <div className={styles.header__middle}>
                        <div className={styles.header__banner}>
                            <div className={styles.header__wrapper}>
                                <img
                                    src={iconFirstBanner}
                                    alt="banner-icon"
                                    className={styles.header__image}
                                />
                            </div>
                            <h1 className={styles.header__banner_title}>
                                Добро пожаловать в <span className={styles.header__banner_span}>Cocteil</span>
                            </h1>
                        </div>
                        <div className={styles.header__banner}>
                            <img
                                src={iconLastBanner}
                                alt="banner-icon"
                                className={styles.header__image}
                            />
                        </div>
                    </div>
                    <div className={styles.header__bottom}>
                        <p className={styles.header__text}>
                            Экономим Ваше время!
                            Предлагаем лучшие цены!
                            Доставляем в кратчайшие сроки!
                        </p>
                        <CatalogButton/>
                    </div>
                </div>
            </MainLayout>
        </header>
    );
};

export default Header;