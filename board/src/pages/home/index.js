import { Container, ContainerConteudo } from './styled'

import Head from '../../components/head'
import Menu from '../../components/menu'

import Daily from '../../components/graphics/daily-subscriptions/index'
import Method from '../../components/graphics/dissemination-method/index'
export default function Home() {
    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <Head />
                <div className="gra1">
                    <Daily />
                </div>
                <div className="box-gra">
                    <div className="gra2">
                    <   Method />
                    </div>

                </div>
            </ContainerConteudo>
        </Container>
    )
}