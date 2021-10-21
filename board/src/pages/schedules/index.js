import { Container, ContainerConteudo } from './styled'


import LoadingBar from 'react-top-loading-bar'

import { useEffect, useRef } from 'react';


import Head from '../../components/head'
import Menu from '../../components/menu'

import Gra1 from '../../components/graphics/daily-subscriptions/index'
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
                <div className="gra1">
                    <Gra1 />
                </div>
            </ContainerConteudo>
        </Container>
    )
}