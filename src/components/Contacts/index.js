import './contacts.css';

const Contacts = () => {

    const numberWhatsapp = "5511952195295";
    const email = "dev.francielly@gmail.com";
    const linkedin = "francielly-silva-316a201a1";
    const gitHub = "DevFrancielly";

    return(
        <section className='contacts-container'>
            <h2>Contatos</h2>
            <div className='contacts'>

                <div className='contacts-card'>
                    <a 
                    href={`mailto:${email}`} 
                    target='_blank' 
                    rel='noopener noreferrer'>
                        <img 
                        className='contacts-img' 
                        src="https://icongr.am/entypo/mail.svg?size=45&color=faf5e4"
                        />
                    </a>
                </div>

                <div className='contacts-card'>
                    <a 
                    href={`https://wa.me/${numberWhatsapp}`} 
                    target='_blank' 
                    rel='noopener noreferrer'>
                        <img 
                        className='contacts-img' 
                        src="https://icongr.am/entypo/phone.svg?size=45&color=faf5e4"
                        />
                    </a>
                </div>

                <div className='contacts-card'>
                    <a 
                    href={`https://www.linkedin.com/in/${linkedin}/`} 
                    target='_blank' 
                    rel='noopener noreferrer'>
                        <img 
                        className='contacts-img' 
                        src="https://icongr.am/entypo/linkedin.svg?size=45&color=faf5e4"
                        />
                    </a>
                </div>

                <div className='contacts-card'>
                    <a 
                    href={`https://github.com/${gitHub}/`} 
                    target='_blank' 
                    rel='noopener noreferrer'>
                        <img 
                        className='contacts-img' 
                        src="https://icongr.am/simple/github.svg?size=128&color=faf5e4&colored=false"
                        />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Contacts