'use strict';

let state = {
    'dataset': {'dataset#0': ['dataset#0.dataset_item#0']},
    'dataset_item': {'dataset#0.dataset_item#0': {'brand': 'bmw', 'color': 'white'}},
    'dataset_name': ['Cars I like the most'],
    'dataset_keys': [['brand', 'color']],
    'customvar': ['player_name'],
};

function choice(choices, template) {

}

function startStep() {
    return choice([customvarStep, datasetStep]);
}

function datasetStep() {
    return choice([startStep, ...Object.keys(state.dataset).map(propertyStep)]);
}

function customvarStep() {
    return choice([startStep, ...state.customvar.map(exitStep)]);
}

function propertyStep(datasetId) {
    return choice([startStep, ...state.dataset_keys[datasetId].map(typeStep)]);
}

function exitStep(value) { // reasonsforcologne.image/2 --> $(reasonsforcologne.image/2)
    return '$(' + value + ')';
}

function typeStep(datasetProperty) {
    return choice([startStep, ...[randomStep, connectedStep, fixedStep].map(fun => fun(datasetProperty))]);
}

function randomStep(datasetProperty) {
    return choice([startStep, ...datasetIndexes(datasetProperty).map(exitStep)]);
}

function connectedStep(datasetProperty) {
    return choice([startStep, ...datasetIndexes(datasetProperty + '/').map(exitStep)]);
}

function fixedStep(datasetProperty) {
    return choice([startStep, indexStep(datasetProperty + '#')]);
}

function datasetIndexes(datasetPropertyWithSuffix) { // reasonsforcologne.image -> reasonsforcologne.image/2
    // return
}

// is this necessary?
function resulted(value) {
    // prepare result string from value
}
