//import HamburgerMenu from 'componentes/HamburgerMenu'; <HamburgerMenu />
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

/*<MenuLink to="/projetos">
                    Projetos
                </MenuLink>*/

export default function Menu() {
    return (
        <header>

            <nav className={styles.navegacao}>
            

                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
                
            </nav>
        </header>
    )
}