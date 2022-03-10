import { useState } from 'react' 

import { Container, Content } from './styles'

import closeMobileModalImg from '../../assets/img/closeMobileModal.png'

import Header from '../../components/Header'
import Store from '../../components/Store'
import Brands from '../../components/Brands'
import Footer from '../../components/Footer'
import MenuMobile from '../../components/Menu/mobile/index'

import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function Home(){

    const [openMobileModal, setOpenMobileModal] = useState(false)

    function handleOpenMobileModal(){
        setOpenMobileModal(true)
    }

    function handleCloseMobileModal(){
        setOpenMobileModal(false)
     }

    return(
        <>
            <Header />
            <MenuMobile openModal={handleOpenMobileModal}/>
            <Store />
            <Brands />
            <Footer />
            
            <Modal
            isOpen={openMobileModal}
            onRequestClose={handleCloseMobileModal}
            >
                <Container>
                    <Content>
                        <div className="closeMobileModal">
                            <img 
                            src={closeMobileModalImg} 
                            alt="Close" 
                            onClick={handleCloseMobileModal}
                            />
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
            </Modal>
        </>
    )
}
