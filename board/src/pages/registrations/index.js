import { Containerinc, ContainerINS } from './styled'


import LoadingBar from 'react-top-loading-bar'

import { useEffect, useRef } from 'react';


import Head from '../../components/head'
import Menu from '../../components/menu'

import Course from '../../components/graphics/course-registration/index'

export default function Home() {

    let loading = useRef(null);

    
    useEffect (() => {
        loading.current.complete();

    }, [])


    return (
        <Containerinc>
            <LoadingBar color="#8808ED" ref={loading} />
            <Menu />
            <ContainerINS>
                <Head />
                <div className="gra1">
                  <Course/>
                </div>
            </ContainerINS>
        </Containerinc>
    )
}