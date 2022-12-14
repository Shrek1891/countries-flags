import {Info} from "./Info";
import {useDetails} from "./useDetails";



const CountryDetails = ({name = '', navigate}) => {
    const {status, error , currentCountry} = useDetails(name);

    return (
        <div>
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </div>
    )
}

export default CountryDetails;