import axios from 'axios'

const BaseUrl = 'http://localhost:3003/api'
const billingCycles = '/billingCycles'

export function getList() {
    const request = axios.get(`${BaseUrl}${billingCycles}`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

