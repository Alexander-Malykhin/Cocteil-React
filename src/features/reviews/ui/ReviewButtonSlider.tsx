import {type FC} from 'react';
//style
import style from '../style/ReviewButtonSlider.module.scss'
//image
import iconArrowViolet from '../assets/arrow-violet.png'


const ReviewButtonSlider: FC = () => {
    return (
        <button className={style.button}>
            <img src={iconArrowViolet} alt=""/>
        </button>
    );
};

export default ReviewButtonSlider;