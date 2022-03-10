import { Container, Content } from './styles'

import starbucksImg from '../../assets/img/starbucks.png'
import nescafeImg from '../../assets/img/nescafe.png'
import timImg from '../../assets/img/tim.png'
import dukinImg from '../../assets/img/dunkin.png'

export default function Brands(){

    return(
        <Container>
            <Content>
                <div className="brands-title">
                    <h2>Marcas que trabalhamos</h2>
                </div>

                <div className="brands-show">
                    <nav>
                        <ul>
                            <li><a href="h"><img src={starbucksImg} alt="Starbucks" /></a></li>
                            <li><a href="h"><img src={nescafeImg} alt="Nescafé" /></a></li>
                            <li><a href="h"><img src={timImg} alt="Tim Hortons" /></a></li>
                            <li><a href="h"><img src={dukinImg} alt="dunkin Donuts" /></a></li>
                        </ul>
                    </nav>
                </div>
            </Content>
        </Container>
    )
}