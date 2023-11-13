import '../styles/Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <section id="footer">
            <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
            <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
            <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faGithubSquare} size="2x" />

        </section>
    )
}