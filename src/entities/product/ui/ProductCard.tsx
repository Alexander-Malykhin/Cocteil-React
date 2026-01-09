import {type FC} from 'react';
//styles
import styles from '../styles/ProductCard.module.scss';
//image
import productImage from '../assets/product.png';
import FavoritesButton from "@features/favorites/ul/FavoritesButton.tsx";
import BasketButton from "@features/basket/ul/BasketButton.tsx";
import RatingButton from "@features/rating/ui/RatingButton.tsx";
import CatalogButtonMore from "@features/catalog/ui/CatalogButtonMore.tsx";

const ProductCard: FC = () => {
    return (
        <div className={styles.card}>
            <img
                alt='card-product-icon'
                src={productImage}
                className={styles.card__image}
            />
            <div className={styles.card__main}>
                <div className={styles.card__main_row}>
                    <span className={styles.card__price}>
                        50.00 р
                    </span>
                    <span className={styles.card__price_discount}>
                        65.00 р
                    </span>
                </div>
                <div className={styles.card__main_row}>
                    <span className={styles.card__name}>
                        Блузка женская классная
                    </span>
                    <div className={styles.card__buttons}>
                        <FavoritesButton/>
                        <BasketButton/>
                    </div>
                </div>
            </div>
            <div className={styles.card__footer}>
                <CatalogButtonMore/>
                <RatingButton/>
            </div>
        </div>
    );
};

export default ProductCard;