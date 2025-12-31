import {type FC, type ReactNode} from 'react';
//styles
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default MainLayout;