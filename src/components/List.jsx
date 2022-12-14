import style from './List.module.css';



export const List = ({ children }) => {
  return <section className={style.list}>{children}</section>;
};
