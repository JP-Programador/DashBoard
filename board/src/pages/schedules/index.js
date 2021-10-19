import { Container, ContainerConteudo } from './styled'

import Head from '../../components/head'
import Menu from '../../components/menu'

import Gra1 from '../../components/graphics/daily-subscriptions/index'
export default function Home() {
    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <Head />
                <div className="gra1">
                    <Gra1 />
                </div>
            </ContainerConteudo>
        </Container>
    )
}