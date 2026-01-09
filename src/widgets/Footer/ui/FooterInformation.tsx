import {type FC} from 'react';
//style
import styles from '../styles/FooterInformation.module.scss'

const FooterInformation: FC = () => {
    return (
        <div className={styles.content}>
            <h2 className={styles.content__title}>
                Контактная информация
            </h2>

            <p className={styles.content__text}>
                ИП Вишневский Иван Сергеевич
                государственная регистрация №690867884 от 31.07.2020.
                <br/>
                Логойским горисполкомом
                Защита прав потребителей +375259990755
            </p>
        </div>
    );
};

export default FooterInformation;