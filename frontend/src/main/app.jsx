import '../commons/template/dependecies'
import React from 'react'

//
import Header from '../commons/template/header'
import SideBar from '../commons/template/sidebar'
import Footer from '../commons/template/footer'

//rota
import Routes from './routes'

//toastr
import Mensagem  from '../commons/msgs/mensagem'


export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
        <Mensagem />
    </div>
)
