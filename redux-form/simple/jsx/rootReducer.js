'use strict';

import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const SubmitterActionTypes = {
    STORE_SUBMITTED_DATA: 'STORE_SUBMITTED_DATA',
    RESET_SUBMITTED_DATA: 'RESET_SUBMITTED_DATA',
};

const SubmitterActionCreators = {
    storeSubmittedData,
    resetSubmittedData,
};

const initialState = {
    bike: {
        color: 'turchino',
        brand: 'Pinocchi Super',
    },
    contact: {
        firstName: 'Luigi',
        lastName: 'Cagrotti',
    },
    fieldArray: {
        campoMatrice: [
            {key: 'hobby', value: 'golf'},
            {key: 'profession', value: 'consultant'},
            {key: 'birthYear', value: '2001'},
            {key: 'studies', value: 'law'},
        ]
    },
};

const submittedReducer = (state = initialState, action) => {
    let stateDOTsubmitted = {...state};

    switch (action.type) {
        case SubmitterActionTypes.STORE_SUBMITTED_DATA:

            stateDOTsubmitted[action.formName] = action.values;
            return stateDOTsubmitted;

        case SubmitterActionTypes.RESET_SUBMITTED_DATA:

            stateDOTsubmitted[action.formName] = {};
            return stateDOTsubmitted;

        default:
            return stateDOTsubmitted;
    }
};

const rootReducer = combineReducers({
    // ...your other reducers here
    submitted: submittedReducer,
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
});

const store = createStore(rootReducer);

export {store, SubmitterActionCreators};

function storeSubmittedData(formName, values) {
    return {
        type: SubmitterActionTypes.STORE_SUBMITTED_DATA,
        formName,
        values,
    };
}

function resetSubmittedData(formName) {
    return {
        type: SubmitterActionTypes.RESET_SUBMITTED_DATA,
        formName,
    };
}
