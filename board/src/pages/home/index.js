import { Container, ContainerConteudo } from './styled'

import Head from '../../components/head'
import Menu from '../../components/menu'

import Gra2 from '../../components/graphics/daily-subscriptions/index'
export default function Home() {
    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <Head />
                <div className="gra1">
                    <Gra2 />
                </div>
                <div className="box-gra">
                    <Gra2 />
                </div>
            </ContainerConteudo>
        </Container>
    )
}