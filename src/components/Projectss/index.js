import './projects.css';
import DigitalClock from '../../img/project-digital-clock.png';
import PaletColors from '../../img/project-Palet-colors.png';
import ToDo from '../../img/project-ToDo.png';
import Calculator from '../../img/project-compound-interest-calculator.png';
import AluraBooks from '../../img/projeto-alura-books.png';
import LoginNetflix from '../../img/project-login-netflix.png';

const Projects = () => {
    return(
        <section className='projects-container'>
            <h2>Projetos</h2>
            <div className='projects'>

                <div className='projects-card'>
                    <img
                    className='projects-img'
                    src={ToDo}
                    alt='Imagem do projeto de um quadro ToDo com varias tonalidades de verdes'
                    />
                    <div className='overlay'>
                        <div className='overlay-text'>ToDo</div>
                    </div>
                </div>

                <div className='projects-card'>
                    <img
                    className='projects-img'
                    src={DigitalClock}
                    alt='Imagem do projeto de um relogio digital nas cores amarelo e preto'
                    />
                    <div className='overlay'>
                        <div className='overlay-text'>Relogio Digital</div>
                    </div>
                </div>

                <div className='projects-card'>
                    <img
                    className='projects-img'
                    src={AluraBooks}
                    alt='Imagem do projeto de um dos projetos feito sobre o curso da Alura'
                    />
                    <div className='overlay'>
                        <div className='overlay-text'>Alura Books</div>
                    </div>
                </div>

                <div className='projects-card'>
                    <img 
                    className='projects-img'
                    src={Calculator}
                    alt='Imagem do projeto de uma calculadora de juros compostos'
                    />
                    <div className='overlay'>
                        <div className='overlay-text'>Calculadora de Juros</div>
                    </div>
                </div>

                <div className='projects-card'>
                    <img 
                    className='projects-img'
                    src={LoginNetflix}
                    alt='Imagem do projeto replicando o login da Netflix'
                    />
                    <div className='overlay'>
                        <div className='overlay-text'>Login Netflix</div>
                    </div>
                </div>

                <div className='projects-card'>
                    <img
                    className='projects-img'
                    src={PaletColors}
                    alt='Imagem do projeto de um gerador de pletas de cores com 5 cores diferentes'
                    />
                    <div className='overlay'>
                        <div className='overlay-text'>PaletColors</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects