import {type FC} from 'react';
//shared
import IconButton from "@shared/ui/IconButton/IconButton.tsx";
//image
import iconAuth from '../assets/auth.svg';

const AuthButton: FC = () => {
    return (
        <IconButton onClick={() => 1}>
            <img
                src={iconAuth}
                alt="basket-icon"
            />
        </IconButton>
    );
};

export default AuthButton;