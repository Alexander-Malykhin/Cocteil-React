import {type FC} from 'react'
import {Link} from "react-router";
import styles from '../styles/FooterItem.module.scss'

interface FooterRouteInterface {
    id: number,
    path: string,
    text: string
}

interface FooterItemInterface {
    title: string
    routes: FooterRouteInterface[]
}

const FooterItem: FC<FooterItemInterface> = ({title, routes}) => {
    return (
        <div className={styles.item}>
            <h2 className={styles.item__title}>
                {title}
            </h2>

            <ul className={styles.item__list}>
                {routes.map(route => (
                    <li key={route.id}>
                        <Link
                            to={route.path}
                            className={styles.item__link}
                        >
                            {route.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterItem
