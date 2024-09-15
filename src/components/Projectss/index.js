import './projects.css';
import DigitalClock from '../../img/project-digital-clock.png';
import PaletColors from '../../img/project-Palet-colors.png';
import ToDo from '../../img/project-ToDo.png';
import Calculator from '../../img/project-compound-interest-calculator.png'

const Projects = () => {
    return(
        <section className='projects-container'>
            <h2>Projetos</h2>
            <div className='projects'>
                <div className='projects-card'>
                    <img className='projects-img' src={DigitalClock} alt='Imagem do projeto de um relogio digital nas cores amarelo e preto'/>
                    <footer></footer>
                </div>
                <div className='projects-card'>
                    <img className='projects-img' src={PaletColors} alt='Imagem do projeto de um gerador de pletas de cores com 5 cores diferentes'/>
                    <footer></footer>
                </div>
                <div className='projects-card'>
                    <img className='projects-img' src={ToDo} alt='Imagem do projeto de um qaudro ToDo com varias tonalidades de verdes'/>
                    <footer></footer>
                </div>
                <div className='projects-card'>
                    <img className='projects-img' src={Calculator} alt='Imagem do projeto de uma calculadora de juros compostos'/>
                    <footer></footer>
                </div>
            </div>
        </section>
    )
}

export default Projects