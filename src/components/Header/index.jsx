import { Container, Content } from "./styles";

import Menu from '../Menu/index'

import bannerImg from '../../assets/img/banner.jpg'

export default function Header(){

    return(
        <Container>
            <Content>
                <Menu />

                <div className="header-banner">
                    <img src={bannerImg} alt="Banner" />

                    <div className="banner-text">
                        <h2>Power up with coffee</h2>
                        <span>Start your exciting day with a cup of Brew Coffee</span>
                        <button type="button">
                            Explore
                        </button>
                    </div>
                </div>
            </Content>
        </Container>
    )
}