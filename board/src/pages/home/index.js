import { Container, ContainerConteudo } from './styled'
import { useState } from 'react';

import Head from '../../components/head'
import Menu from '../../components/menu'

import 'react-calendar/dist/Calendar.css';

import Method from '../../components/graphics/dissemination-method/index'

export default function Home() {
    const [value, onChange] = useState(new Date());


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