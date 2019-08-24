import { combineReducers } from 'redux';

//importando reducers
import DashboardReducer from '../dashboard/reducer/dashboard.reducer'
import TabReducer from '../commons/tab/reducer/tabs.reducer'

const reducers = combineReducers({
    // Remova essa linha depois de adicionar seus ducks
    dashboard: DashboardReducer,
    tab: TabReducer
});

export default reducers;
