import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return(
        <section id="header">
            <img src="https://static.wixstatic.com/media/e8cef9_127fbc8209f442f28b26f80811225709~mv2.gif" alt="profile-picture"/>
            <h1>Ibrian Mihai-Răzvan</h1>
            <h2>Frontend Developer</h2>
            <button className="btn"><FontAwesomeIcon icon={faEnvelope} />E-mail</button>
        </section>
    )
}