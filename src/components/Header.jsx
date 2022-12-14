import {Link} from 'react-router-dom';
import {Container} from './Container';
import {useCleanUp} from "../features/controls/useCleanUp";
import {ThemeSwitcher} from "../features/theme/ThemeSwitcher";
import style from './Header.module.css';


export const Header = () => {
    const cleanUp = useCleanUp();

    return (
        <header className={style.header}>
            <Container>
                <div className={style.wrapper}>
                    <Link to = "/" onClick={cleanUp} className={style.link}>Where is the world?</Link>
                    <ThemeSwitcher/>
                </div>
            </Container>
        </header>
    );
};
