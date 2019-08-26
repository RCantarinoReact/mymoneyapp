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
import { selectTab, showTabs } from '../commons/tab/action/tabs.action'
import { create } from '../billingCycle/action/billingCycle.action'

//forms
import BillingCycleForm from './forms/billingCycle.form'

class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tabListar')
        this.props.showTabs('tabListar', 'tabAdd')
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
                                <BillingCycleForm onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id='tabEdit'><h1>Edit</h1></TabContent>
                            <TabContent id='tabDel'><h1>Delete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectTab, showTabs , create }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle)
