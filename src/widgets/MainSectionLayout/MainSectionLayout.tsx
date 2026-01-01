import {type FC, type ReactNode} from 'react';
//styles
import styles from './MainSectionLayout.module.scss'
//shared
import MainTitleSection from "@shared/ui/MainTitleSection/MainTitleSection.tsx";
//widgets
import {MainLayout} from "@widgets/MainLayout";

interface MainSectionLayoutInterface {
    children: ReactNode,
    title: string,
    isAccent: boolean,
    accentText?: string,
    isCircle:boolean,
    circleClass?:string
}

const MainSectionLayout: FC<MainSectionLayoutInterface> = ({children, title, isAccent, accentText,isCircle,circleClass}) => {
        return (
            <section className={`${styles.section} ${isCircle ? circleClass : ""}`}>
                <MainLayout>
                    <div className={styles.section__content}>
                        <MainTitleSection
                            isAccent={isAccent}
                            accentText={accentText}
                        >
                            {title}
                        </MainTitleSection>
                        {children}
                    </div>
                </MainLayout>
            </section>
        );
    }
;

export default MainSectionLayout;