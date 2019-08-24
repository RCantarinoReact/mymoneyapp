const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do credito']},
    value: { type: Number, min: 0 , required: [true, 'Informe o valor do credito']}
})//

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: {
        type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 0, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2999, required: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('billingCycleSchema', billingCycleSchema)


