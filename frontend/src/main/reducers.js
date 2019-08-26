import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

//importando reducers
import DashboardReducer from '../dashboard/reducer/dashboard.reducer'
import TabReducer from '../commons/tab/reducer/tabs.reducer'
import BillingCycleReducer from '../billingCycle/reducer/billingCycle.reducer'

const reducers = combineReducers({
    // Remova essa linha depois de adicionar seus ducks
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer

});

export default reducers
