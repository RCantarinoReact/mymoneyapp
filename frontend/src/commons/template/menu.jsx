import React from 'react'
import MenuItem from './menuitem'
import MenuTree from './menuTree'


export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='dashBoard' icon='dashboard' />
        <MenuTree label='cadastro' icon='edit'>
            <MenuItem path='#billingCycles' icon='usd' label='Ciclos de pagamento'>
            </MenuItem>
        </MenuTree>
    </ul>
)