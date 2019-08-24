const mongoose = require('mongoose')
const mongoUrl =  'mongodb'
mongoose.Promise = global.Promise

module.exports = mongoose.connect(mongoUrl, {useNewUrlParser: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' e requerido"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado e menor que o limite minimo '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado e menor que o limite maximo '{MAX}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' informado nao e valido para o '{PATH}'"

