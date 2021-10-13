import { Container, ContainerConteudo } from './styled'

import Head from '../../components/head'
import Menu from '../../components/menu'

import Gra1 from '../../components/graphics/schedules/index'
import Gra2 from '../../components/graphics/online-test/test(line)'
export default function Home() {
    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <Head />
                <div className="gra1">
                    <Gra1 />
                </div>
                <div className="gra2">
                    <Gra2 />
                </div>
            </ContainerConteudo>
        </Container>
    )
}