import {useNeighbors} from "./useNeighbors";
import style from './Info.module.css';


export const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props;
  const neighbors = useNeighbors(borders);
  return (
    <section className={style.info}>
      <img src={flag} alt={name} />

      <div>
        <h1>{name}</h1>
        <div className={style.listGroup}>
          <ul>
            <li>
              <b>Native Name:</b> {nativeName}
            </li>
            <li>
              <b>Population</b> {population}
            </li>
            <li>
              <b>Region:</b> {region}
            </li>
            <li>
              <b>Sub Region:</b> {subregion}
            </li>
            <li>
              <b>Capital:</b> {capital}
            </li>
          </ul>
          <ul>
            <li>
              <b>Top Level Domain</b>{' '}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </li>
            <li>
              <b>Currency</b>{' '}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </li>
            <li>
              <b>Top Level Domain</b>{' '}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </li>
          </ul>
        </div>
        <div className={style.meta}>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={style.tagGroup}>
              {neighbors && neighbors.map((b) => (
                <span className={style.tag} key={b} onClick={() => push(`/country/${b}`)}>
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
