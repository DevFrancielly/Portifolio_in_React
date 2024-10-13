import './skills.css';

const Skills = () => {
    return(
        <section className='skills-container'>
            <h2>Habilidades</h2>
            <div className='skills'>
                <div className='card'>
                    <div>
                        <img src="https://icongr.am/devicon/html5-plain.svg?size=128&color=faf5e4"/>
                    </div>
                    <p className='card-p'>HTML 5</p>
                </div>
                <div className='card'>
                    <div>
                        <img src="https://icongr.am/devicon/css3-plain.svg?size=128&color=faf5e4"/>
                    </div>
                    <p className='card-p'>CSS 3</p>
                </div>
                <div className='card'>
                    <div>
                        <img src="https://icongr.am/devicon/javascript-plain.svg?size=128&color=faf5e4" />
                    </div>
                    <p className='card-p'>JavaScript</p>
                </div>
                <div className='card'>
                    <div>
                        <img src="https://icongr.am/simple/react.svg?size=128&color=faf5e4&colored=false" />
                    </div>
                    <p className='card-p'>React</p>
                </div>
                <div className='card'>
                    <div>
                        <img src="https://icongr.am/devicon/wordpress-plain.svg?size=128&color=faf5e4" />
                    </div>
                    <p className='card-p'>WordPress</p>
                </div>
                <div className='card'>
                    <div>
                        <img src="https://icongr.am/devicon/php-plain.svg?size=128&color=faf5e4" />
                    </div>
                    <p className='card-p'>PHP</p>
                </div>
            </div>
        </section>
    )
}

export default Skills