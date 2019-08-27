import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

//action
import { getList, showUpdate } from './action/billingCycle.action'


function mapStateToProps(state) {
    return {
        list: state.billingCycle.list
    };
}

class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList()
    }
    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td> {bc.name}  </td>
                <td> {bc.month} </td>
                <td> {bc.year}  </td>
                <td>
                    <button className='btn btn-warning'
                        onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                </td>

            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mes</th>
                            <th>Ano</th>
                            <th>Acoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getList, showUpdate }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);