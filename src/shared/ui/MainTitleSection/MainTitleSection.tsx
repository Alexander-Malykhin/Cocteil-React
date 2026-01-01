import {type FC, type ReactNode} from 'react';
//styles
import styles from './MainTitleSection.module.scss'

interface MainTitleSectionInterface {
    children: ReactNode,
    isAccent: boolean,
    accentText?: string
}

const MainTitleSection: FC<MainTitleSectionInterface> = ({children, isAccent, accentText}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {children}
            </h1>
            {isAccent && <span className={styles.title__accent}>{accentText}</span>}
        </div>
    );
};

export default MainTitleSection;