import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../../commons/form/labelAndInput'

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
                            cols='12 4'  maxLength={4}
                            label='Ano' type='number' />
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary'>Gravar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)
