import './description.css';
import MyPhoto from '../../img/myPhoto.jpeg';

const Description = () => {
    return(
        <div className='description-container'>
            <img className='myPhoto' src={MyPhoto} alt='Minha foto'/>
            <div>
                <h2>Sobre Mim</h2>
                <p>Sou uma desenvolvedora de software em transição de carreira, apaixonada por tecnologia e por criar interfaces intuitivas e funcionais. Após uma trajetória em suporte tecnico, decidi seguir minha paixão pela programação. Tenho me especializado em desenvolvimento front-end, onde posso unir criatividade e lógica para entregar soluções voltadas para a experiência do usuário.
                Minha jornada de aprendizado é contínua, com foco em criar aplicações web responsivas e de alta performance, sempre atenta às melhores práticas e tendências do desenvolvimento de interfaces.</p>
                <div className='button'>download cv</div>
            </div>
        </div>
    )
}
export default Description