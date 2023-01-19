import styles from './menu.module.css'
import MenuLink from '../menuLink';

export default function Menu() {
    
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'> Home </MenuLink>
                <MenuLink to='/about'> About Me </MenuLink>
            </nav>
        </header>
    );
}