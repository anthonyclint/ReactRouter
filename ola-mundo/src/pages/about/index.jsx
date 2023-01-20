import styles from './about.module.css';

import PostModel from 'components/PostModel';
import fotoCapa from 'assets/sobre_mim_capa.png';
import minhaFoto from 'assets/eu.jpg';

export default function About() {
    return (
        <PostModel
            fotoCapa = { fotoCapa }
            titulo = 'Sobre mim'
        >
            <h3 className = { styles.subtitulo }>
                Olá, eu sou o Anthony Clint!
            </h3>

            <img
                className = { styles.fotoSobreMim }
                src = { minhaFoto }
                alt = "Foto do Anthony Clint." 
            />
            <p className = { styles.paragrafo }>  
                Oi, tudo bem? Eu sou desenvolvedor Front-end e estou feliz de te ver por aqui.
            </ p>   

            <p className = { styles.paragrafo }> 
                Minha história com programação começou na Faculdade de Tecnologia da Baixada Santista (FATEC - Rubens Lara), após ter me formado em Engenharia Civil pela Universidade Santa Cecília. Eu aprendi lógica de programação e o básico de várias linguagens, como C, C++, C#, PHP, Python, Java e JavaScript.
            </ p>            

            <p className = { styles.paragrafo }>   
                Ao longo dessa segunda graduação também fiz cursos e bootcamps paralelos à grade da faculdade, como o Bootcamp DiversiData Tech Pan com foco em Ciências de Dados e o Bootcamp Fullstack Developer da plataforma StartSe.
            </ p>            
                    
            <p className = { styles.paragrafo }>  
                Meu primeiro estágio foi na Santos Port Authority — empresa responsável pela administração de todo o sistema portuário da cidade de Santos. Ali tive experiência por algumas áreas de TI, como desenvolvimento (sobretudo na forma de sustentação do site oficial), suporte (realizando manutenção de máquinas e lidando com programas legados) e infra (utilizando Zabix, cadastrando novos funcionários em diversos sistemas, excluindo ex-funcionários, configurando telefones de ramais por rede, etc).
            </ p>            

            <p className = { styles.paragrafo }>  
                Depois, fui participar do processo de formação da ModalGR — empresa de soluções e tecnologia nascida em Santos. Nesse processo, ao longo de 3 meses, estudei e realizei desafios da Stack de Desenvolvimento Front-End com Angular.
            </ p>            

            <p className = { styles.paragrafo }> 
                Desde então, tem sido apenas aprendizado atrás de aprendizado.  Pra cima!!!
            </ p>            
        </PostModel>
    );
}