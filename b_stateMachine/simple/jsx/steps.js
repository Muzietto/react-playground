'use strict';

import {initialState as state} from './initialState';
import choice from './dsl';

export function startStep() {
    return choice([customvarStep, datasetStep]);
}

export function datasetStep() {
    return choice([startStep, ...Object.keys(state.dataset).map(key => () => propertyStep(key))]);
}

export function customvarStep() {
    return choice([startStep, ...state.customvar.map(exitStep)]);
}

export function propertyStep(datasetId) {
    let datasetName = state.dataset_name[parsedStateId(datasetId).currentPos];
    return choice([startStep, ...state.dataset_keys[parsedStateId(datasetId).currentPos]
        .map(key => datasetName + '.' + key)
        .map(key => () => typeStep(key))
    ]);
}

export function exitStep(value, index) { // reasonsforcologne.image/2 --> $(reasonsforcologne.image/2)
    let result = () => {
        alert('$(' + value + ')');
    };
    Object.defineProperty(result, 'name', {value: 'exitStep ' + ((typeof index !== 'undefined') ? 'item ' + index : '')});
    return result;
}

export function typeStep(datasetProperty) {
    return choice([startStep, ...[randomStep, connectedStep, fixedStep].map(fun => () => fun(datasetProperty))]);
}

export function randomStep(datasetProperty) {
    return choice([startStep, ...datasetIndexes(datasetProperty).map(exitStep)]);
}

export function connectedStep(datasetProperty) {
    return choice([startStep, ...datasetIndexes(datasetProperty + '/').map(exitStep)]);
}

export function fixedStep(datasetProperty) {
    return choice([startStep, ...datasetIndexes(datasetProperty + '#').map(exitStep)]);
}

function datasetIndexes(datasetPropertyWithSuffix) { // reasonsforcologne.image -> reasonsforcologne.image/2
    let datasetName = datasetPropertyWithSuffix.split('.')[0];
    let datasetPos = state.dataset_name.findIndex(item => item === datasetName);
    let numInstances = state.dataset['dataset#' + datasetPos].length;
    return [...Array(numInstances).keys()].map(key => datasetPropertyWithSuffix + key);
}

function parsedStateId(id) {
    let pieces = id.split('#');
    return {
        currentPos: pieces[1],
    };
}