import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../../commons/form/labelAndInput'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Init } from '../action/billingCycle.action'



class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <Field name='name'
                            component={LabelAndInput}
                            label='Nome'
                            cols='12 4'
                            placeholder='Informe o nome' />
                        <Field
                            component={LabelAndInput}
                            name='month' cols='12 4'
                            maxLength={2}
                            label='Mes' type='number' />
                        <Field name='year'
                            component={LabelAndInput}
                            cols='12 4' maxLength={4}
                            label='Ano' type='number' />
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary'>Gravar</button>
                        <button type="button" className='btn btn-danger'
                            onClick={this.props.Init}>Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

const mapDispatchToProps = dispatch =>  bindActionCreators({ Init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm) 