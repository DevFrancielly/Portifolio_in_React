import './contacts.css';

const Contacts = () => {
    return(
        <section className='contacts-container'>
            <h2>Contatos</h2>
            <div className='contacts'>
                <div className='contacts-card'>
                    <img className='contacts-img' src="https://icongr.am/entypo/mail.svg?size=45&color=004445"/>
                </div>
                <div className='contacts-card'>
                    <img className='contacts-img' src="https://icongr.am/entypo/phone.svg?size=45&color=004445" />
                </div>
                <div className='contacts-card'>
                    <img className='contacts-img' src="https://icongr.am/entypo/linkedin.svg?size=45&color=004445" />
                </div>
                <div className='contacts-card'>
                    <img className='contacts-img' src="https://icongr.am/devicon/github-original.svg?size=60&color=004445" />
                </div>
            </div>
        </section>
    )
}

export default Contacts