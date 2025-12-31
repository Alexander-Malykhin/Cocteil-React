import {type FC} from 'react';
//styles
import styles from '../styles/Search.module.scss'
//image
import searchIcon from '../assets/search.svg'

const Search: FC = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search__wrapper}>
                <img
                    src={searchIcon}
                    alt="search-icon"
                    className={styles.search__image}
                />
            </div>
            <input
                type="text"
                placeholder={'Поиск'}
                className={styles.search__input}
            />
        </div>
    );
};

export default Search;