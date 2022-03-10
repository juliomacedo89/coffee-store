import { Container } from './styles'

import logoImg from '../../assets/img/logo1.png'

export default function Menu(){

    return(
        <Container>
            <h1 className="logo">
                <a href="home">
                    <img src={logoImg} alt="" />
                </a>
            </h1>

            <nav>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="home">Explore</a></li>
                    <li><a href="home">Marcas</a></li>
                    <li><a href="home">Contato</a></li>
                </ul>
            </nav>

            <button type="button">
                Sign up/Login
            </button>
        </Container>
          

    )
}