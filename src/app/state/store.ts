import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import car from '../car/_state/reducer';
import config from './config/reducer';
import { createLogger } from 'redux-logger';
import dialog from './dialog/reducer';
import entity from './entity/reducer';
import error from './error/reducer';
import global from './global/reducer';
import language from './language/reducer';
import modal from './modal/reducer';
import organizationMaintenance from '../organization/maintenance/_state/reducer';
import sharedNavigationInfo from './shared/navigationInfo/reducer';
import sidePanel from './sidepanel/reducer';
import user from './user/reducer';
import vat from '../vat/_state/reducer';
import vatMaintenance from '../vat/maintenance/_state/reducer';

const rootReducer = combineReducers({
    car,
    config,
    dialog,
    entity,
    error,
    global,
    language,
    modal,
    organizationMaintenance,
    sharedNavigationInfo,
    sidePanel,
    user,
    vat,
    vatMaintenance,
});

const logger = createLogger({
    collapsed: true,
});

// if local storage has the code tables then use this as default for codeTable store state
// const persistedState = localStorage.getItem(LOCAL_STORAGE.persistedState)
//     ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.persistedState) || '{}')
//     : {};
const persistedState = {};

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

// store the codeTables in local storage
// store.subscribe(() => {
//     localStorage.setItem(
//         LOCAL_STORAGE.persistedState,
//         JSON.stringify({
//             codeTable: store.getState().codeTable,
//         })
//     );
// });

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkResult<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;

export default store;
