import {Search} from './Search';
import {CustomSelect} from './CustomSelect';
import {useRegions} from "./useRegions";
import style from './Controls.module.css';


const optionsMap = {
    'Africa': {value: 'Africa', label: 'Africa'},
    'America': {value: 'America', label: 'America'},
    'Asia': {value: 'Asia', label: 'Asia'},
    'Europe': {value: 'Europe', label: 'Europe'},
    'Oceania': {value: 'Oceania', label: 'Oceania'},
}
const options = Object.values(optionsMap);



export const Controls = () => {
    const [region, handleSelect ] = useRegions();
    return (
        <div className={style.controls}>
            <Search/>
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={optionsMap[region]}
                onChange={handleSelect}
            />
        </div>
    );
};
