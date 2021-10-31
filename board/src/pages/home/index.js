import { Container, ContainerConteudo } from './styled'





import Head from '../../components/head'
import Menu from '../../components/menu'


import Method from '../../components/graphics/dissemination-method/index'

export default function Home() {


    return (
        <Container>

            <Menu />
            <ContainerConteudo>
                <Head />
                    <div className="gra2">
                    <  Method />
                    </div>
            </ContainerConteudo>
        </Container>
    )
}