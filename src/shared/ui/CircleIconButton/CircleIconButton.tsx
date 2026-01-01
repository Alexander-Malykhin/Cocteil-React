import {type FC, type ReactNode} from 'react';
//styles
import styles from './CircleIconButton.module.scss'

interface CircleIconButtonInterface {
    children: ReactNode,
    onClick: () => void
}

const CircleIconButton: FC<CircleIconButtonInterface> = ({children, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default CircleIconButton;