import {type FC} from 'react';
//shared
import IconButton from "@shared/ui/IconButton/IconButton.tsx";
//image
import iconFavorites from '../assets/favorites.svg';

const FavoritesButton: FC = () => {
    return (
        <IconButton onClick={() => 1}>
            <img
                src={iconFavorites}
                alt="favorite-icon"
            />
        </IconButton>
    );
};

export default FavoritesButton;