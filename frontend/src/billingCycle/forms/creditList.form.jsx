import React, { Component } from 'react'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../../commons/layout/grid'
import Input from '../../commons/form/input'

//

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class creditListForm extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', 'credits', index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', 'credits', index)
        }
    }


    renderRows() {

        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`credits[${index}].name`}
                        component={Input}
                        placeholder='informe o nome'
                        readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field name={`credits[${index}].value`}
                        component={Input}
                        placeholder='informe o nome'
                        readOnly={this.props.readOnly} />
                </td>
                <td>
                    <button type='button'
                        onClick={() => this.add(index + 1)}
                        className='btn btn-success'>
                        <i className='fa fa-plus'></i>
                    </button>

                    <button type='button'
                        onClick={() => this.add(index + 1, item)}
                        className='btn btn-warning'>
                        <i className='fa fa-clone'></i>
                    </button>

                    <button type='button'
                        onClick={() => this.remove(index)}
                        className='btn btn-danger'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Creditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Acoes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({ arrayInsert, arrayRemove }, dispatch);


export default connect(null, mapDispatchToProps)(creditListForm)