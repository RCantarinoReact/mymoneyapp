import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../../commons/form/labelAndInput'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Init } from '../action/billingCycle.action'
import ItemList from './itemList.form'



class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props

        return (
            <div>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <Field name='name'
                            component={LabelAndInput}
                            label='Nome'
                            cols='12 4'
                            readOnly={readOnly}
                            placeholder='Informe o nome' />
                        <Field
                            component={LabelAndInput}
                            name='month' cols='12 4'
                            maxLength={2}
                            readOnly={readOnly}
                            label='Mes' type='number' />
                        <Field name='year'
                            component={LabelAndInput}
                            cols='12 4'
                            maxLength={4}
                            label='Ano'
                            readOnly={readOnly}
                            type='number' />

                        <ItemList cols='12 6'
                            list={credits}
                            readOnly={readOnly}
                            field='credits'
                            legend='Creditos' />

                        <ItemList cols='12 6'
                            list={debts}
                            readOnly={readOnly}
                            field='debts'
                            legend='Debitos'
                            showStatus={true} />

                    </div>
                    <div className='box-footer'>
                        <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                            {this.props.submitLabel}
                        </button>
                        <button type="button" className='btn btn-danger' onClick={this.props.Init}>Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'credits')

});
const mapDispatchToProps = dispatch => bindActionCreators({ Init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm) 