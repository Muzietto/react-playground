'use strict';

export function startStep() {
    return choice([customvarStep, datasetStep]);
}

export function startStep() {
    return choice([startStep, ...Object.keys(state.dataset).map(propertyStep)]);
}

export function customvarStep() {
    return choice([startStep, ...state.customvar.map(exitStep)]);
}

export function propertyStep(datasetId) {
    return choice([startStep, ...state.dataset_keys[datasetId].map(typeStep)]);
}

export function exitStep(value) { // reasonsforcologne.image/2 --> $(reasonsforcologne.image/2)
    return '$(' + value + ')';
}

export function typeStep(datasetProperty) {
    return choice([startStep, ...[randomStep, connectedStep, fixedStep].map(fun => fun(datasetProperty))]);
}

export function randomStep(datasetProperty) {
    return choice([startStep, ...datasetIndexes(datasetProperty).map(exitStep)]);
}

export function connectedStep(datasetProperty) {
    return choice([startStep, ...datasetIndexes(datasetProperty + '/').map(exitStep)]);
}

export function fixedStep(datasetProperty) {
    return choice([startStep, indexStep(datasetProperty + '#')]);
}

function datasetIndexes(datasetPropertyWithSuffix) { // reasonsforcologne.image -> reasonsforcologne.image/2
    // return
}
