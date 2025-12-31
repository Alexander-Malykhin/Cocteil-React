import {type FC} from 'react';
//shared
import IconButton from "@shared/ui/IconButton/IconButton.tsx";
//image
import iconBasket from '../assets/basket.svg';

const BasketButton: FC = () => {
    return (
        <IconButton onClick={() => 1}>
            <img
                src={iconBasket}
                alt="basket-icon"
            />
        </IconButton>
    );
};

export default BasketButton;