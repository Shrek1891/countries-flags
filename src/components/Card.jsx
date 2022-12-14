
import style from './Card.module.css'
import {CardTitle} from "./CardTitle";


export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <article className={style.card} onClick={() => onClick()}>
      <img src={img} alt={name} />
      <div>
        <CardTitle>{name}</CardTitle>
        <ul>
          {info.map((el) => (
            <li key={el.title}>
              <b className={style.bold}>{el.title}:</b> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
