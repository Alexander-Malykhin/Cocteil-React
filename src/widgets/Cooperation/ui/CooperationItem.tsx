import {type FC, Fragment} from 'react';
//style
import styles from '../styles/CooperationItem.module.scss'

type CooperationItemType = 'advantages' | 'cooperation'

interface CooperationItemInterface {
    type: CooperationItemType,
    title?: string,
    text: string,
    image?: string,
}

const CooperationItem: FC<CooperationItemInterface> = ({type, title, text, image}) => {

    const splitTitle = (title: string) => {
        const [first, second] = title.split(' ')
        return (
            <Fragment>
                {first}
                <br/>
                {second}
            </Fragment>
        )
    }

    return (
        type === 'cooperation' && title ?
            <div className={styles.item}>
                <h2 className={styles.item__title}>
                    {splitTitle(title)}
                </h2>
                <p className={styles.item__text}>
                    {text}
                </p>
            </div>
            :
            <div className={styles.item}>
                <img
                    src={image}
                    alt="cooperation-icon"
                />
                <p className={styles.item__text}>
                    {text}
                </p>
            </div>
    );
};

export default CooperationItem;