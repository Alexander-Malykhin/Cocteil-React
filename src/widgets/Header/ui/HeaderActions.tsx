import {type FC} from 'react';
//styles
import styles from '../styles/HeaderActions.module.scss'
//features
import AuthButton from "@features/auth/ul/AuthButton.tsx";
import FavoritesButton from "@features/favorites/ul/FavoritesButton.tsx";
import BasketButton from "@features/basket/ul/BasketButton.tsx";

const HeaderActions: FC = () => {
    return (
        <div className={styles.container}>
            <AuthButton/>
            <FavoritesButton/>
            <BasketButton/>
        </div>
    );
};

export default HeaderActions;