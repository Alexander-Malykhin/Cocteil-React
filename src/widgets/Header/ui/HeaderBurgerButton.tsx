import {type FC} from 'react';
import {useDispatch} from "react-redux";
//styles
import styles from '../styles/HeaderBurgerButton.module.scss'
//slice
import {toggle} from "@widgets/Header/models/slice.ts";

const HeaderBurgerButton: FC = () => {

    const dispatch = useDispatch()

    return (
        <button
            className={styles.burger}
            onClick={() => dispatch(toggle())}
        >
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
        </button>
    );
};

export default HeaderBurgerButton;