import { Containerinc, ContainerINS } from './styled'


import Head from '../../components/head'
import Menu from '../../components/menu'

import Course from '../../components/graphics/course-registration/index'
import Daily from '../../components/graphics/daily-subscriptions/index'

export default function Home() {


    return (
        <Containerinc>
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