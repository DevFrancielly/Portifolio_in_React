import './skills.css';

const Skills = () => {
    return(
        <section className='skills-container'>
            <h2>Habilidades</h2>
            <div className='skills'>
                <div className='card'>
                    <p className='card-p'>HTML 5</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                    <footer></footer>
                </div>
                <div className='card'>
                    <p className='card-p'>CSS 3</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    <footer></footer>
                </div>
                <div className='card'>
                    <p className='card-p'>JavaScript</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <footer></footer>
                </div>
                <div className='card'>
                    <p className='card-p'>React</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <footer></footer>
                </div>
                <div className='card'>
                    <p className='card-p'>WordPress</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" />
                    <footer></footer>
                </div>
                <div className='card'>
                    <p className='card-p'>PHP</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                    <footer></footer>
                </div>
            </div>
        </section>
    )
}

export default Skills