import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className = { styles.rodape }>
            <MarcaRegistrada />
            Desenvolvido por Alura.
        </footer>
    );
};