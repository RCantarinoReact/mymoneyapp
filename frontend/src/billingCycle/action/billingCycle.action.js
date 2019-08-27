import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { selectTab, showTabs } from '../../commons/tab/action/tabs.action'

const BaseUrl = 'http://localhost:3003/api'
const billingCycles = '/billingCycles'
const nomeForm = 'BillingCycleForm'
export function getList() {
    const request = axios.get(`${BaseUrl}${billingCycles}`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

//redux multi, thunk e sagas... permitie multiplas chamadas
export function create(values) {
    return dispatch => {
        axios.post(`${BaseUrl}${billingCycles}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operacao realizada com sucesso')
                dispatch([
                    resetForm(nomeForm),
                    getList(),
                    selectTab('tabListar'),
                    showTabs('tabListar', 'tabAdd')
                ])
            })
            .catch(e => {
                e.response.data.erros.foreach(erro => toastr.error('Erro', erro))
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate')
    ]
}
