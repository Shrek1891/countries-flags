import { Container } from './Container';
import style from './Main.module.css'

export const Main = ({ children }) => {
  return (
    <main className={style.main}>
      <Container>{children}</Container>
    </main>
  );
};
