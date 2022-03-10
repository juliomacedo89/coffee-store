import { Container } from './styles'

import logoImgMobile from '../../../assets/img/logo1.png'
import userImgMobile from '../../../assets/img/userMobile.png'
import hamburguerImgMobile from '../../../assets/img/menuMobile.png'


export default function MenuMobile({openModal}){
    
    return(
        <Container>
            <div className="logo">
                <img 
                src={logoImgMobile} 
                alt="Logo" 
                />
            </div>

            <div className="mobile">
                <nav>
                    <ul>
                        <li>
                            <img src={userImgMobile} alt="Login" />
                        </li>
                        <li>                         
                            <img src={hamburguerImgMobile}
                            alt="Menu" 
                            onClick={openModal}
                            />                          
                        </li>
                    </ul>
                </nav>
            </div>

        
        </Container>
    )
}