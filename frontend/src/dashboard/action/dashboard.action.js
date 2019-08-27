import axios from 'axios'
const base_url = 'http://localhost:3003/api'
const summary_url = '/billingCycles/summary'

export function getSummary(){
    const request = axios.get(`${base_url}${summary_url}`)

    return {
        type: 'BILLING_SUMMARY_FETCH ',
        payload: request
    }
}