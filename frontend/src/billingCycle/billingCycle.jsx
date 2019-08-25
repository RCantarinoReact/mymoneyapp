import React, { Component } from 'react'
import ContentHeader from '../commons/template/contentheader'
import Content from '../commons/template/content'

//tabs
import Tabs from '../commons/tab/tabs'
import TabsHeader from '../commons/tab/tabsHeader'
import TabsContent from '../commons/tab/tabsContent'
import TabHeader from '../commons/tab/tabHeader'
import TabContent from '../commons/tab/tabContent'


//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab , showTabs } from '../commons/tab/action/tabs.action'


class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tabListar')
        this.props.showTabs('tabListar','tabAdd')
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
                            <TabContent id='tabListar'><h1>Lista</h1></TabContent>
                            <TabContent id='tabAdd'><h1>Add</h1></TabContent>
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
    bindActionCreators({ selectTab , showTabs }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle)
