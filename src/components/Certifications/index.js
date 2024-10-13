import './certifications.css';
import icon from '../../img/icon-certification 1.png'

const Certifications = () => {
    const iconSize = {
        width: "50px",
        height: "50px"
    };

    return(
        <section className='certifications-container'>
            <h2>Certificações</h2>4
            <div className='certifications'>
                <div className='certifications-columA'>
                    <div className='certifications-card'>
                        <img
                        style={iconSize}
                        className='certifications-img'
                        src={icon}
                        alt='icone de certificado'
                        />
                        <p>A partir do zero: HTML e CSS para projetos web</p>
                    </div>
                    <div className='certifications-card'>
                        <img
                        style={iconSize}
                        className='certifications-img'
                        src={icon}
                        alt='icone de certificado'
                        />
                        <p>WordPress: crie sites do zero</p>
                    </div>
                    <div className='certifications-card'>
                        <img
                        style={iconSize}
                        className='certifications-img'
                        src={icon}
                        alt='icone de certificado'
                        />
                        <p>PHP: conceitos, lidando com dados, loops e mais</p>
                    </div>
                </div>
                <div className='certifications-columB'>
                    <div className='certifications-card'>
                        <img
                        style={iconSize}
                        className='certifications-img'
                        src={icon}
                        alt='icone de certificado'
                        />
                        <p>A partir do zero: HTML e CSS para projetos web</p>
                    </div>
                    <div className='certifications-card'>
                        <img
                        style={iconSize}
                        className='certifications-img'
                        src={icon}
                        alt='icone de certificado'
                        />
                        <p>WordPress: crie sites do zero</p>
                    </div>
                    <div className='certifications-card'>
                        <img
                        style={iconSize}
                        className='certifications-img'
                        src={icon}
                        alt='icone de certificado'
                        />
                        <p>PHP: conceitos, lidando com dados, loops e mais</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certifications