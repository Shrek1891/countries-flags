import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from './use-theme';
import  style from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={style.modeSwitcher} onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{' '}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </div>
  )
}

export {ThemeSwitcher};
