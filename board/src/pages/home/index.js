import { Container, ContainerConteudo } from './styled'

import LoadingBar from 'react-top-loading-bar'

import { useEffect, useRef } from 'react';



import Head from '../../components/head'
import Menu from '../../components/menu'


import Method from '../../components/graphics/dissemination-method/index'

export default function Home() {

    let loading = useRef(null);

    
    useEffect (() => {
        loading.current.complete();

    }, [])

    return (
        <Container>
            <LoadingBar color="#8808ED" ref={loading} />

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