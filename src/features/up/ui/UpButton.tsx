import {type FC} from 'react';
//image
import iconUpArrowWhite from '../assets/arrow-up-white.svg'
//shared
import CircleIconButton from "@shared/ui/CircleIconButton/CircleIconButton.tsx";

const UpButton: FC = () => {
    return (
        <CircleIconButton onClick={() => 1}>
            <img
                src={iconUpArrowWhite}
                alt="arrow-up-white-icon"
            />
        </CircleIconButton>
    );
};

export default UpButton;