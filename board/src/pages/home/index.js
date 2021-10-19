import { Container, ContainerConteudo } from './styled'
import { useState } from 'react';

import Head from '../../components/head'
import Menu from '../../components/menu'

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

import Daily from '../../components/graphics/daily-subscriptions/index'
import Method from '../../components/graphics/dissemination-method/index'

export default function Home() {
    const [value, onChange] = useState(new Date());


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
                    <div className="calendar">
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>

                </div>
            </ContainerConteudo>
        </Container>
    )
}