import {IoSearch} from 'react-icons/io5';
import {useSearch} from "./useSearch";
import style from './Search.module.css';


export const Search = () => {
    const [search, handleSearch] = useSearch();
    return (
        <label className={style.search}>
            <IoSearch/>
            <input onChange={handleSearch} value={search} type={"search"} placeholder={'Search for a country...'}/>
        </label>
    );
};
