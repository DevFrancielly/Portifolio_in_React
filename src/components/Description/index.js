import './description.css';
import MyPhoto from '../../img/myPhoto.jpeg';

const Description = () => {
    return(
        <div className='description-container'>
            <img src={MyPhoto} alt='Minha foto'/>;
            <div>
                <h2>Sobre Mim</h2>
                <p className='description-p'>Lorem ipsum dolor sit amet. Rem molestiae nemo nam consequatur obcaecati ut similique veniam non exercitationem officia eum recusandae totam. Eos autem sunt non minus necessitatibus qui nihil harum eum quidem soluta ut animi nihil in adipisci blanditiis et maiores officiis. Aut atque iusto sit voluptatibus dolorem et deleniti iste. Sed nisi nulla eos numquam aliquam id repellendus galisum qui autem quia? Cum ratione similique ut earum necessitatibus sed cupiditate harum ut modi consequatur vel quod enim sed internos quis.</p>
            </div>
        </div>
    )
}

export default Description