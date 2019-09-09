import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../../commons/tab/action/tabs.action'

const BaseUrl = 'http://localhost:3003/api'
const billingCycles = '/billingCycles'
const nomeForm = 'billingCycleForm'
const INITIAL_VALUES = { credits: [{}] , debts: [{}] }


export function Init() {
    return [
        showTabs('tabListar', 'tabAdd'),
        selectTab('tabListar'),
        getList(),
        initialize(nomeForm, INITIAL_VALUES)
    ]
}

export function getList() {
    const request = axios.get(`${BaseUrl}${billingCycles}`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

//redux multi, thunk e sagas... permitie multiplas chamadas
export function create(values) {
    return submit(values, 'post')
}

export function remove(values) {
    return submit(values, 'delete')
}

//colocar um modal passando o id
export function showDelete(billingCycle) {
    return [
        showTabs('tabDel'),
        selectTab('tabDel'),
        initialize(nomeForm, billingCycle)
    ]
}


export function update(values) {
    return submit(values, 'put')
}

function submit(values, method) {

    const id = values._id ? values._id : ''
    return dispatch => {
        axios[method](`${BaseUrl}${billingCycles}/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operacao realizada com sucesso')
                dispatch(Init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}


export function showUpdate(billingCycle) {
    return [
        showTabs('tabEdit'),
        selectTab('tabEdit'),
        initialize(nomeForm, billingCycle)
    ]
}
