
import styles from './banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/eu.jpg';

export default function Banner() {
    return (
        <div className={ styles.banner }>
            <div className={ styles.apresentacao }>
                <h1 className={ styles.titulo }>
                    Olá Mundo!
                </h1>

                <p className={ styles.paragrafo }>
                    Boas vindas ao meu espaço pessoal! Eu sou Anthony Clint, Dev Front-end. 
                    Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={ styles.imagens }>
                <img 
                    className={ styles.circuloColorido }
                    src={ circuloColorido }
                    alt="Círculo colorido." 
                />
                <img 
                    className={ styles.minhaFoto }
                    src={ minhaFoto }
                    alt="Foto do Anthony Clint." 
                />
            </div>
            
        </div>
    );
}