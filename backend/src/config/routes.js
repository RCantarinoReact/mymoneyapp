const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api' , router)

    //payments routes
    const BillingCycle = require('../api/billingCycle/billingCycle.service')
    BillingCycle.register(router , '/billingCycles')


}





