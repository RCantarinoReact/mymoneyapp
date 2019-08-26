import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BaseUrl = 'http://localhost:3003/api'
const billingCycles = '/billingCycles'

export function getList() {
    const request = axios.get(`${BaseUrl}${billingCycles}`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BaseUrl}${billingCycles}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operacao realizada com sucesso')
        })
        .catch(e => {
            e.response.data.erros.foreach(erro => toastr.error('Erro', erro))
        })


}
