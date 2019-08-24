import { combineReducers } from 'redux';

//importando reducers
import DashboardReducer from '../dashboard/dashboard.reducer'

const reducers = combineReducers({
    // Remova essa linha depois de adicionar seus ducks
    dashboard: DashboardReducer
});

export default reducers;
