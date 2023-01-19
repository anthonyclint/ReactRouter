import { Link, useLocation } from 'react-router-dom';

import styles from './menuLink.module.css';

export default function MenuLink({ children, to }) {
    const location = useLocation(); //hook do router-dom

    return(
        <Link 
            className={ `
            ${styles.link} 
            ${location.pathname === to ? styles.linkHighlighted : ''}
            ` } to={ to }>
                { children }
        </Link>
    );
}

/*
import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}

*/