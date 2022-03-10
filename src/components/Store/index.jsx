import cappucinoImg from '../../assets/img/cappucino.png'
import mochaImg from '../../assets/img/mocha.png'
import latteImg from '../../assets/img/latte.png'
import coldJavaImg from '../../assets/img/coldJava.png'

import { Container, Content } from './styles'

/* import "react-responsive-carousel/lib/styles/carousel.min.css" */
/* import { Carousel } from 'react-responsive-carousel' */


export default function Store(){

    return(
        <Container>
            <Content>
                <div className="store-title">
                    <h2>Escolha agora o seu café</h2>
                </div>

                <div className="products-show">
                    {/* <Carousel
                        infiniteLoop= "true"
                        centerMode= "true"
                        centerSlidePercentage= "30"
                        interval="1000"
                        showArrows= "true"
                        width="100%"  
                    >  */}
                        <div className="product-item">
                            <a href="home">
                                <div className="product-image">
                                    <img src={cappucinoImg} alt="Cappucino" />
                                </div>
                                <div className="presentation">
                                    <h3 className="product-title">Cappucino</h3>

                                    <p className="product-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.
                                    </p>
                                </div>
                                <div className="product-sale">
                                    <h4 className="product-price">R$ 8,60</h4>
                                    <button className="product-order">
                                        Comprar
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="product-item">
                            <a href="home">
                                <div className="product-image">
                                    <img src={mochaImg} alt="Mocha" />
                                </div>
                                <div className="presentation">
                                    <h3 className="product-title">Mocha</h3>

                                    <p className="product-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.
                                    </p>
                                </div>
                                <div className="product-sale">
                                    <h4 className="product-price">R$ 9,60</h4>
                                    <button className="product-order">
                                        Comprar
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="product-item">
                            <a href="home">
                                <div className="product-image">
                                    <img src={latteImg} alt="Latte" />
                                </div>
                                <div className="presentation">
                                    <h3 className="product-title">Latte</h3>

                                    <p className="product-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.
                                    </p>
                                </div>
                                <div className="product-sale">
                                    <h4 className="product-price">R$ 4,40</h4>
                                    <button className="product-order">
                                        Comprar
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="product-item">
                            <a href="home">
                                <div className="product-image">
                                    <img src={coldJavaImg} alt="Cold Java" />
                                </div>
                                <div className="presentation">
                                    <h3 className="product-title">Cold java</h3>

                                    <p className="product-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.
                                    </p>
                                </div>
                                <div className="product-sale">
                                    <h4 className="product-price">R$ 11,30</h4>
                                    <button className="product-order">
                                        Comprar
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="product-item">
                            <a href="home">
                                <div className="product-image">
                                    <img src={cappucinoImg} alt="Cappucino Plus" />
                                </div>
                                <div className="presentation">
                                    <h3 className="product-title">Cappucino Plus</h3>

                                    <p className="product-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.
                                    </p>
                                </div>
                                <div className="product-sale">
                                    <h4 className="product-price">R$ 13,90</h4>
                                    <button className="product-order">
                                        Comprar
                                    </button>
                                </div>
                            </a>
                        </div>

                        <div className="product-item">
                            <a href="home">
                                <div className="product-image">
                                    <img src={mochaImg} alt="Mocha Plus" />
                                </div>
                                <div className="presentation">
                                    <h3 className="product-title">Mocha Plus</h3>

                                    <p className="product-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.
                                    </p>
                                </div>
                                <div className="product-sale">
                                    <h4 className="product-price">R$ 11,50</h4>
                                    <button className="product-order">
                                        Comprar
                                    </button>
                                </div>
                            </a>
                        </div>

                        

                        
                    {/* </Carousel>  */}

                </div>

                </Content>
        </Container>
    )

}





