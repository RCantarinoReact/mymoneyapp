import React, { Component } from 'react';

import Grid from '../commons/layout/grid'
import Row from '../commons/layout/row'
import ValueBox from '../commons/widget/valuebox'


export default ({ credit, debt }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
        </fieldset>
        <Row>
            <ValueBox
                cols='12 4'
                color='green'
                icon='bank'
                value={`R$ ${credit}`}
                text='Total de creditos' />

            <ValueBox
                cols='12 4'
                color='red'
                icon='credit-card'
                value={`R$ ${debt}`}
                text='Total de debit' />

            <ValueBox
                cols='12 4'
                color='blue'
                icon='money'
                value={`R$ ${credit - debt}`}
                text='Consolidado' />
        </Row>
    </Grid>
)

