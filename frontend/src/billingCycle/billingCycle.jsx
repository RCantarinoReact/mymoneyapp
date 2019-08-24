import React, { Component } from 'react'
import ContentHeader from '../commons/template/contentheader'
import Content from '../commons/template/content'

//tabs
import Tabs from '../commons/tab/tabs'
import TabsHeader from '../commons/tab/tabsHeader'
import TabsContent from '../commons/tab/tabsContent'
import TabHeader from '../commons/tab/tabHeader'

class BillingCycle extends Component {
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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
export default BillingCycle
