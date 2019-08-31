import React, { Component } from 'react'
import ContentHeader from '../commons/template/contentheader'
import Content from '../commons/template/content'

//tabs
import Tabs from '../commons/tab/tabs'
import TabsHeader from '../commons/tab/tabsHeader'
import TabsContent from '../commons/tab/tabsContent'
import TabHeader from '../commons/tab/tabHeader'
import TabContent from '../commons/tab/tabContent'

//lista
import BillingCycleList from './billingCycleList'


//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Init , create, update, remove } from '../billingCycle/action/billingCycle.action'

//forms
import BillingCycleForm from './forms/billingCycle.form'

class BillingCycle extends Component {
    componentWillMount() {
        this.props.Init()
    }
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de pags' small='cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar'
                                icon='bars' target='tabListar' />
                            <TabHeader label='Incluir'
                                icon='plus' target='tabAdd' />
                            <TabHeader label='Alterar'
                                icon='pencil' target='tabEdit' />
                            <TabHeader label='Excluir'
                                icon='trash-o' target='tabDel' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabListar'>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id='tabAdd'>
                                <BillingCycleForm
                                    onSubmit={this.props.create}
                                    submitLabel='Incluir'
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabEdit'>
                                <BillingCycleForm 
                                onSubmit={this.props.update}
                                submitLabel='Editar'
                                submitClass='warning' />
                            </TabContent>
                            <TabContent id='tabDel'>
                                <BillingCycleForm 
                                onSubmit={this.props.remove} 
                                readOnly={true} 
                                submitLabel='Excluir'
                                submitClass='warning'/>

                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ Init, create, update, remove }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle)
