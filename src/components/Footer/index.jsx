import { Container, Content} from './sytles'

import instagramImg from '../../assets/img/instagram.svg'
import facebookImg from '../../assets/img/facebook.svg'
import twitterImg from '../../assets/img/twitter.svg'
import pinterestImg from '../../assets/img/pinterest.svg'
import githubtImg from '../../assets/img/linkedin.png'
import linkedinImg from '../../assets/img/github.png'

export default function Footer(){

    return(
        <Container>
            <Content>
                <div className="footer-title">
                    <h2>Saiba mais</h2>
                </div>

                <div className="footer-contact">
                    <div className="footer-contact__merchandise">
                        <h3>Merchandise</h3>
                        <nav>
                            <ul>
                                <li><a href="h"h>Camisetas</a></li>
                                <li><a href="h"h>Bonés</a></li>
                                <li><a href="h">Pulseiras</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-contact__franchise">
                        <h3>Franquias</h3>
                        <nav>
                            <ul>
                                <li><a href="h"h>Coffee Outlet</a></li>
                                <li><a href="h"h>Coffee Machine</a></li>
                                <li><a href="h">Saiba mais</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-contact_aboutUs">
                        <h3>Sobre nós</h3>
                        <nav>
                            <ul>
                                <li><a href="h" className="cream">Promoções</a></li>
                                <li><a href="h" className="cream">SAC</a></li>
                                <li><a href="h" className="cream">Ação social</a></li>
                                <li><a href="h" className="cream">Conquistas</a></li>
                                <li><a href="h" className="cream"> Carreiras</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-contact_social">
                        <h3>Siga MyCoffee</h3>
                        <nav>
                            <ul className="social">
                                <li><a href="h"><img src={instagramImg} alt="Instagram" /></a></li>
                                <li><a href="h"><img src={facebookImg} alt="Facebook" /></a></li>
                                <li><a href="h"><img src={twitterImg} alt="Twitter" /></a></li>
                                <li><a href="h"><img src={pinterestImg} alt="Pinterest" /></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="footer-development">
                    <h3>Desenvolvido por:
                        <nav>
                            <ul>
                                <li><a href="https://github.com/juliomacedo89"><img src={githubtImg} alt="Github" /></a></li>
                                <li><a href="https://www.linkedin.com/in/j%C3%BAlio-macedo-6ab034180/"><img src={linkedinImg} alt="Linkedin" /></a></li>
                            </ul>
                        </nav>
                    </h3>
                </div>
            </Content>
        </Container>
    )
}