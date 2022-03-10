import { useState } from 'react'

import { Container, Content } from './styles'

import closeMobileModalImg from '../../assets/img/closeMobileModal.png'


export default function MenuMobileModal(){

    const[mobileModal, setMobileModal] = useState(false)

    

    if(mobileModal === true){
        return(
            <Container>
                <Content>
                    <div className="closeMobileModal">
                        <img src={closeMobileModalImg} alt="Close" />
                    </div>
                    <div className="mobileModalInteraction">
                        <nav>
                            <ul>
                                <li><a href=" ">Home</a></li>
                                <li><a href=" ">Explore</a></li>
                                <li><a href=" ">Marcas</a></li>
                                <li><a href=" ">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </Content>
            </Container>
        )
    }else{
        return(
            <>
            </>
        )
    }
}