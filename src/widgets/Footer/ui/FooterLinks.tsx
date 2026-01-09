import {type FC} from 'react';
//style
import styles from '../styles/FooterLinks.module.scss'
import {Link} from "react-router";
//image
import iconTelegram from '../assets/tg.png'
import iconInstagram from '../assets/instagram.png'
import iconMail from '../assets/mail.png'
import iconPhone from '../assets/phone.png'
import iconPhoneVoice from '../assets/phone-voice.png'
import iconTime from '../assets/time.png'

const FooterLinks: FC = () => {
    return (
        <div className={styles.content}>
            <h2 className={styles.content__title}>
                Соц. сети
            </h2>

            <div className={styles.content__links}>
                <Link to={'/'} className={styles.content__links_item}>
                    <img src={iconTelegram} alt="icon"/>
                </Link>
                <Link to={'/'} className={styles.content__links_item}>
                    <img src={iconInstagram} alt="icon"/>
                </Link>
                <Link to={'/'} className={styles.content__links_item}>
                    <img src={iconMail} alt="icon"/>
                </Link>
                <Link to={'/'} className={styles.content__links_item}>
                    <img src={iconPhone} alt="icon"/>
                </Link>
            </div>

            <div className={styles.content__information}>
                <img src={iconPhoneVoice} alt="icon"/>
                <span className={styles.content__information_text}>
                    +375255990755
                </span>
            </div>

            <div className={styles.content__information}>
                <img src={iconTime} alt="icon"/>
                <span className={styles.content__information_text}>
                    круглосуточно, без выходных
                </span>
            </div>
        </div>
    );
};

export default FooterLinks;