import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboard.action'
import ContentHeader from '../commons/template/contentheader'
import Content from '../commons/template/content'
import ValueBox from '../commons/widget/valuebox'
import Row from '../commons/layout/row'

class Dashboard extends Component {
    componentWillMount() {
        this.props.getSummary()
    }

    render() {

        const { credit, debt } = this.props.summary
        const result = credit - debt

        return (
            <div>
                <ContentHeader title='Dashboard' small='1.0' />
                <Row>
                    <Content>
                        <ValueBox cols='12 4'
                            color='green'
                            icon='bank'
                            value={`R$ ${credit}`}
                            text='Total de Creditos' />

                        <ValueBox cols='12 4'
                            color='red'
                            icon='credit-card'
                            value={`R$ ${debt}`}
                            text='Total de debitos' />

                        <ValueBox cols='12 4'
                            color='blue'
                            icon='money'
                            value={`R$ ${result}`}
                            text='Consolidado' />
                    </Content>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getSummary }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)