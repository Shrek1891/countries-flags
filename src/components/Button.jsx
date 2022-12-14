import style from './Button.module.css';
import {useNavigate} from "react-router-dom";

export const Button = ({children}) => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() =>  navigate(-1)}
            className={style.button}>{children}</button>
            )
        };
