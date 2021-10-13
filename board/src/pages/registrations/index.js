import { Containerinc, ContainerINS } from './styled'

import Head from '../../components/head'
import Menu from '../../components/menu'

import Gra3 from '../../components/graphics/daily-subscriptions'
import Gra4 from '../../components/graphics/course-registration/index'
import Gra5 from '../../components/graphics/dissemination-method/dissemination-method (line)'


export default function Home() {
    return (
        <Containerinc>
            <Menu />
            <ContainerINS>
                <Head />
                <div className="gra1">
                    <Gra3 />
                </div>
                <div className="gra2">
                    <Gra4 />
                </div>
                <div className="gra3">
                    <Gra5 />
                </div>
            </ContainerINS>
        </Containerinc>
    )
}