import style from './Card.module.css'
export const CardTitle = ({children}) => {
    return (
        <h3 className={style.card}>{children}</h3>
    )
}