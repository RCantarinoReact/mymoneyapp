import React, { Component } from 'react'
import ContentHeader from '../commons/template/contentheader'
import Content from '../commons/template/content'
import ValueBox from '../commons/widget/valuebox'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='1.0' />
                <Content>
                    <ValueBox cols='12 4'
                        color='green'
                        icon='bank'
                        value='R$ 10.00'
                        text='Total de Creditos' />

                    <ValueBox cols='12 4'
                        color='red'
                        icon='credit-card'
                        value='R$ 10.00'
                        text='Total de debitos' />
                        
                    <ValueBox cols='12 4'
                        color='blue'
                        icon='money'
                        value='R$ 0.00'
                        text='Consolidado' />
                </Content>
            </div>
        )
    }
}


export default Dashboard