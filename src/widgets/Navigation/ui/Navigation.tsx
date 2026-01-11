import {type FC} from 'react';
import {Link} from "react-router";
//style
import style from '../style/Navigation.module.scss'
//image
import iconLogo from '../assets/logo.svg'
//slice
import {useNavigationOutsideClick} from '../models/useNavigationOutsideClick.ts';

const Navigation: FC = () => {

    const {navRef, isOpen} = useNavigationOutsideClick();

    return (
        <nav
            className={`${style.navigation} ${isOpen ? style.navigation__open : ''}`}
            ref={navRef}
        >
            <img
                src={iconLogo}
                alt="logo-icon"
                className={style.navigation__image}
            />
            <div className={style.navigation__content}>
                <Link to={'/'} className={style.navigation__item}>
                    Женщинам
                </Link>
                <Link to={'/'} className={style.navigation__item}>
                    Женщинам
                </Link>
                <Link to={'/'} className={style.navigation__item}>
                    Женщинам
                </Link>
                <Link to={'/'} className={style.navigation__item}>
                    Женщинам
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;