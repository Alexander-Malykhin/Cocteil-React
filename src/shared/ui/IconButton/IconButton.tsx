import {type FC, type ReactNode} from 'react';
//styles
import styles from './IconButton.module.scss'

interface IconButtonInterface {
    children: ReactNode;
    onClick:() => void;
}

const IconButton: FC<IconButtonInterface> = ({children, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;